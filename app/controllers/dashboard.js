"use strict";

const postModel = require('../models/post');
const xssFilters = require('xss-filters');
const paginate = require('express-paginate');

exports.index = async (req, res) => {  
    let keyword = req.query.key;
    keyword = xssFilters.inHTMLData(keyword);

    let page = req.query.page;
    page = Number.parseInt(page);
    page = (page <= 0) ? 1 : page;

    let limit = req.query.limit;
    limit = Number.parseInt(limit);
    limit = (limit <= 0) ? 30 : limit;
    
    let totalItems = 0;
    await postModel.getAllDataPostsByConditions(keyword)
    .then(rows => {
        totalItems = rows.length;
    });
    const pageCount = Math.ceil(totalItems/limit);
    const pages = paginate.getArrayPages(req)(limit, pageCount, page);

    // get data view
    let posts = null;
    await postModel.getDataPostsByPanigate(page, limit, keyword)
    .then(rows => {
        posts = rows;
    }); 
    
    const data = {
        title: 'Dashboard',
        pageCount: pageCount,
        itemCount: totalItems,
        pages: pages,
        posts: posts
    }  
    res.render('home/index', data);
}