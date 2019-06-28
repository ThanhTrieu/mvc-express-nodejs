//const moment = require('moment');
const mysql = require('mysql');
const dbconfig = require('../../config/database');
const connection = mysql.createConnection(dbconfig.connection);
// select database - very important
connection.query(`USE ${dbconfig.database}`);

function resultsCallback(err, records) {
    if (err) {
        console.log(err);
        throw err;
    } else {
        return records;
    }
}

exports.getAllDataPostsByConditions = (keyword = '') => {
    let key = `%${keyword}%`;
    return new Promise((reslove, reject) => {
        let sqlQuery = 'SELECT p.*, c.name AS name_cate, c.parent_id FROM posts AS p INNER JOIN categories AS c ON p.categories_id = c.id WHERE p.title LIKE ? OR p.slug_title LIKE ? OR p.sapo LIKE ? ';
        connection.query(sqlQuery, [key, key, key] , (err, rows) => {
            if(err){
                reject(resultsCallback(err, null));
            } else {
                reslove(resultsCallback(null, rows));
            }
        });
    });
}

exports.getDataPostsByPanigate = (page, limit, keyword = '') => {
    let start = (page - 1) * limit;
    let key   = `%${keyword}%`;
    return new Promise((reslove, reject) => {
        let sqlQuery = "SELECT p.*, c.name AS name_cate, c.parent_id FROM posts AS p INNER JOIN categories AS c ON p.categories_id = c.id WHERE p.title LIKE ? OR p.slug_title LIKE ? OR p.sapo LIKE ? LIMIT ?, ?";
        connection.query(sqlQuery, [key, key, key, start, limit] , (err, rows) => {
            if(err){
                reject(resultsCallback(err, null));
            } else {
                reslove(resultsCallback(null, rows));
            }
        });
    });
}

exports.removeDataPostAddErrorById = (idPost) => {
    return new Promise((reslove, reject) => {
        let delQuery = "DELETE FROM posts WHERE posts.id = ?";
        connection.query(delQuery, [idPost], (err, rows) => {
            if(err){
                reject(resultsCallback(err, null));
            } else {
                reslove(resultsCallback(null, rows));
            }
        });
    });
}

exports.insertDataToPosts = (dataInsert = []) => {
    return new Promise((reslove, reject) => {
        let insertQuery = "INSERT INTO posts ( title, slug_title, sapo, avatar, categories_id, language_type, status, publish_date, created_at, updated_at ) values (?,?,?,?,?,?,?,?,?,?)";
        connection.query(insertQuery, dataInsert, function(err, rows) {
            if(err){
                reject(resultsCallback(err, null));
            } else {
                reslove(resultsCallback(null, rows.insertId))
            }
        });
    });
}

exports.insertDataToContent = (dataInsert = []) => {
    return new Promise((reslove, reject) => {
        let insertQuery = "INSERT INTO contents ( posts_id, content_web, content_mobile, content_amp, created_at, updated_at ) values (?, ?, ?, ?, ?, ?)";
        connection.query(insertQuery, dataInsert, function(err, rows) {
            if(err){
                reject(resultsCallback(err, null));
            } else {
                reslove(resultsCallback(null, rows.insertId))
            }
        });
    });
}