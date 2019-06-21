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

exports.getAllTagsForCreatePost = () => {
    return new Promise((reslove, reject) => {
        let selectQuery = "SELECT name_tag FROM tags WHERE status = 1";
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