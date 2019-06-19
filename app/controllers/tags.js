const tagModel = require('../models/tag');

exports.getAllTags = (req, res) => {
    tagModel.getAllTagsForCreatePost((err, rows)=> {
        if(err){
            return res.send(err);
        }
        let arrData = [];
        rows.forEach( el => {
            arrData.push(el.name_tag);
        });
        return res.send(arrData);
    });
}