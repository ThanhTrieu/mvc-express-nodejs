"use strict";
const tagModel = require('../models/tag');

exports.getAllTags = async (req, res) => {
    let resultData = [];
    let arrData = [];
    
    await tagModel.getAllTagsForCreatePost()
    .then(rows => {
        resultData = rows;
    });

    resultData.forEach( el => {
        arrData.push(el.name_tag);
    });
    return res.send(arrData);

}