const mysql = require('mysql');
const dbconfig = require('../../config/database');
const connection = mysql.createConnection(dbconfig.connection);
// select database - very important
connection.query(`USE ${dbconfig.database}`);

exports.getAllTagsForCreatePost = (cb) => {
    let selectQuery = "SELECT name_tag FROM tags WHERE status = 1";
    connection.query(selectQuery,[],(err, rows) => {
        if(err){
            return cb(err, rows);
        }
        if(rows.length){
            return cb(null,rows);
        } else {
            return cb(null, null);
        }
    })
}