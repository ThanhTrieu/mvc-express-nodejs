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

exports.insertDataToPostTag = (dataInserts = []) => {
    return new Promise((reslove, reject) => {
        let sqlQuery = "INSERT INTO posts_tags(posts_id, tags_id, is_primary, created_at, updated_at) VALUES(?, ?, ?, ?, ?)";
        connection.query(sqlQuery, dataInserts, (err, rows) => {
            if(err){
                reject(resultsCallback(err,null));
            } else {
                reslove(resultsCallback(null, rows.insertId));
            }
        });
    });
}

exports.getAllTagsForCreatePost = (type = 0) => {
    return new Promise((reslove, reject) => {
        let selectQuery = null;

        if(type == 1){
            selectQuery = "SELECT id, name_tag FROM tags WHERE status = 1";
        } else {
            selectQuery = "SELECT name_tag FROM tags WHERE status = 1";
        }
         
        connection.query(selectQuery,[],(err, rows) => {
            if(err) {
                reject(resultsCallback(err, null));
            }
            if(rows.length) {
                reslove(resultsCallback(null,rows));
            } else {
                reslove(resultsCallback(null, null));
            }
        });
    });
}