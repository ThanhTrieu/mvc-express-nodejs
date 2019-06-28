"use strict";

exports.index = (req, res, next) => {
    const data = {
        title: 'Chat io socket',
    }  
    res.render('chat/index', data);
}