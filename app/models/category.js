// category model
const moment = require('moment');
var arrayToTree = require('array-to-tree');
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

exports.getCategories = () => {
    return new Promise((resolve, reject) => {
        let selectQuery = "SELECT * FROM categories WHERE status = 1";
        connection.query(selectQuery,[],(err, rows) => {
            if(err){
                reject(resultsCallback(err, null));
            }
            if(rows.length){
                resolve(resultsCallback(null,rows));
            } else {
                resolve(resultsCallback(null,null));
            }
        });
    });
    
}

exports.getCategoryToTree = () => {
    return new Promise((resolve, reject) => {
        let selectQuery = "SELECT * FROM categories WHERE status = 1";
        connection.query(selectQuery,[],(err, rows) => {
            if(err){
                reject(resultsCallback(err, null));
            }
            if(rows.length){
                resolve(resultsCallback(null,arrayToTree(rows)));
            } else {
                resolve(resultsCallback(null,null));
            }
        });
    });
    
}

exports.addCategorieBlog = (name, sugName, parentId, cb) => {
    let idCate = 0;
    let selectQuery = "SELECT name,slug FROM categories WHERE name = ?";
    connection.query(selectQuery, [name], function(err, rows) {
        if(err){
            return cb(err, idCate)
        }
        if(rows.length) {
            return cb(null, idCate);
        } else {
            let insertQuery = "INSERT INTO categories ( name, slug, parent_id, status, created_at, updated_at ) values (?,?,?,?,?,?)";
            let currentDate =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
            connection.query(insertQuery,[name, sugName, parentId, 1, currentDate, null], function(err, rows) {
                if(err){
                    return cb(err, idCate);
                }
                idCate = rows.insertId;
                return cb(null, idCate);
            });
        }
    });
}