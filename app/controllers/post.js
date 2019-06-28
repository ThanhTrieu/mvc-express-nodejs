"use strict";

const moment = require('moment');
const cateModel = require('../models/category');
const tagModel = require('../models/tag');
const postModel = require('../models/post');
const path = require('path');
const formidable = require('formidable');
const constants = require('../../config/constants');
const urlSlug = require('url-slug');
const xssFilters = require('xss-filters');
// Load the full build.
const _ = require('lodash');

const arrAllowTypeImagev2 = ['image/jpg', 'image/png', 'image/gif', 'image/jpeg', 'image/bmp'];

function getExtensionFile (fileName) {
    return fileName.split('.').pop();
}

function compareArray(arr1, arr2) {
    const finalarray =[];
    arr1.forEach( (e1) => arr2.forEach( (e2) => {
        if(e1.name_tag === e2){
            finalarray.push(e1.id);
        }
    }));
    return finalarray;
}

exports.index =  async (req, res) => {

    // get categories
    let listCates = [];
    await cateModel.getCategories()
    .then(rows => {
        listCates = rows;
    });

    // get tags
    let resultData = [];
    let listTags = [];
    await tagModel.getAllTagsForCreatePost()
    .then(rows => {
        resultData = rows;
    });
    resultData.forEach( el => {
        listTags.push(el.name_tag);
    });


    const data = {
        title: 'Create post',
        listCate: listCates,
        listTag: listTags,
        errors: req.session.errorsPost
    }  
    res.render('posts/index', data);
}

exports.createPost =  async (req, res) => {
    if(req.method == "POST"){
        // validate data
        req.checkBody('title', 'Title is required').notEmpty().isLength({ max: 100 });
        req.checkBody('sapo', 'Sapo is required').notEmpty().isLength({ max: 200});
        req.checkBody('hiddenAvatar').notEmpty().withMessage('Avatar is required');
        req.checkBody('dataContent', 'Content is required').notEmpty();
        req.checkBody('language', 'Language is required').notEmpty();
        req.checkBody('categories', 'Categories is required').notEmpty().isNumeric();
        req.checkBody('tags', 'Tag is required').notEmpty().isArray();

        let errors = req.validationErrors();
        if(errors){
            req.session.errorsPost = errors;
            res.redirect(301,'/create-post');
        } else {
            if(req.session.errorsPost){
                req.session.errorsPost = null;
            }
            let publishDate = null;
            let status = 0;
            let idPost = 0;
            let allTags = null;

            let titlePost = req.body.title;
            titlePost = xssFilters.inHTMLData(titlePost);
            let sapoPost = req.body.sapo;
            let avatarPost = req.body.hiddenAvatar;
            let contentPost = req.body.dataContent;
            let language = req.body.language;
            let category = req.body.categories;
            let tags = req.body.tags;
            let sugName = urlSlug(titlePost);

            let publishPost = req.body.publishPost;
            if(publishPost){
                publishDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
                status = 1;
            }

            let createDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
            let updateDate = null;

            let dataInsert = [
                titlePost,
                sugName,
                sapoPost,
                avatarPost,
                category,
                language,
                status,
                publishDate,
                createDate,
                updateDate
            ];

            // add to db
            // add post
            await postModel.insertDataToPosts(dataInsert)
            .then(id =>  idPost = id );

            // add content post
            if(idPost > 0){
                await postModel.insertDataToContent([
                    idPost,
                    contentPost,
                    null,
                    null,
                    createDate,
                    null
                ]).then( async idContent => {
                    // neu khong insert vao bang content dc thi rollback ko insert vao bang post
                    if(idContent < 0 || idContent == null) {
                        await postModel.removeDataPostAddErrorById(idPost);
                        // khong thuc thi gi nua - quay ve lai form add.
                        res.redirect(301,'/create-post/err');
                    }
                });

                // xu ly tags
                await tagModel.getAllTagsForCreatePost(1)
                .then (res => allTags = res);

                let chekArrayTags = compareArray(allTags, tags);
                let flagInsertPostTag = false;
                if(chekArrayTags){
                    // insert to table post_tags
                    chekArrayTags.forEach( async (idTag) => {
                        await tagModel.insertDataToPostTag([idPost, idTag, 0, createDate, updateDate])
                        .then(idPostTag => {
                            if(idPostTag > 0 && id !== null){
                                flagInsertPostTag = true;
                            }
                        });
                    })
                }
                res.redirect(301,'/dashboard');
            } else {
                // khong add vao dc post
                res.redirect(301,'/create-post/fail');
            }
        }
    }
    res.redirect(301,'/create-post');
}

exports.upLoadAvatar = (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function (name, file){
        if(arrAllowTypeImagev2.indexOf(file.type) != -1) {
            file.path = path.resolve(path.dirname(constants.root_folder_upload)) + constants.path_upload_image + file.name;
            form.on('file', function (name, file){
                res.send({ "pathView" : constants.path_view_image + file.name, "nameFile" : file.name });
            });
        } else {
            res.send('ERR');
        }
    });
}