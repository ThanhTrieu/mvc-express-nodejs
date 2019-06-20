const cateModel = require('../models/category');
const path = require('path');
const formidable = require('formidable');
const arrAllowTypeImage = ['image/jpg', 'image/png', 'image/gif', 'image/jpeg', 'image/bmp'];
const constants = require('../../config/constants');

exports.index = (req, res) => {
    cateModel.getCategoryToTree((tree,rows) => {
        const data = {
            title: 'Create post',
            listCate: rows
        }  
        res.render('posts/index', data);
    });
}

exports.createPost = (req, res) => {
    if(req.method == "POST"){
        console.log(req);
    }
    res.send('Fuck');
}

exports.upLoadAvatar = (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function (name, file){
        if(arrAllowTypeImage.indexOf(file.type) != -1) {
            file.path = path.resolve(path.dirname(constants.root_folder_upload)) + constants.path_upload_image + file.name;
            form.on('file', function (name, file){
                res.send({ "pathView" : constants.path_view_image + file.name, "nameFile" : file.name });
            });
        } else {
            res.send('ERR');
        }
    });
}