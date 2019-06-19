const cateModel = require('../models/category');

exports.index = (req, res) => {
    cateModel.getCategoryToTree((tree,rows) => {
        const data = {
            title: 'Create post',
            user: req.session.user,
            listCate: rows
        }  
        res.render('posts/index', data);
    });
}

exports.createPost = (req, res) => {
    if(req.method == "POST"){
        console.log(req.body);
    }
    res.send('Fuck');
}

exports.upLoadAvatar = (req, res) => {

}