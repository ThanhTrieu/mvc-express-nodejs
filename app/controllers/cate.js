const urlSlug = require('url-slug');
const cateModel = require('../models/category');

exports.index = (req, res) => {  
    cateModel.getCategoryToTree((result, rows) => {
        const data = {
            title: 'Categories',
            success: req.session.success,
            exists: req.session.existName,
            errors: req.session.errors,
            cate: result,
            listCate: rows
        }  
        res.render('categories/index', data);
    })
    
}

exports.addCate = (req, res) => {
    if (req.method == "POST") {
        let nameCate = req.body.nameCate;
        let parentId = req.body.parentId;

        req.checkBody('nameCate', 'nameCate is required').notEmpty();
        req.checkBody('parentId', 'parentId is required').notEmpty().isNumeric();

        let errors = req.validationErrors();
        if(errors){
            req.session.errors = errors;
            req.session.success = false;
            req.session.existName = null;
            res.redirect('/categories');
        }
        else {
            if(req.session.errors){
                req.session.errors = null;
            }
            let sugName = urlSlug(nameCate);
            cateModel.addCategorieBlog(nameCate, sugName, parentId, (err, data) => {
                if(err || data == 0) {
                    req.session.success = false;
                    req.session.existName = true;
                } else {
                    req.session.success = true;
                    req.session.existName = false;
                }
                res.redirect('/categories');
            })
        }
    }
}