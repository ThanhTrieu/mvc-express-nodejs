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

exports.getAllDataTypeWorks = () => {
  return new Promise((reslove, reject) => {
    let sqlQuery = "SELECT a.id as value, a.name_work as label FROM type_works AS a WHERE a.status = 1";
    connection.query(sqlQuery,[], (err, rows) => {
      if(err){
        reject(resultsCallback(err, null));
      } else {
        reslove(resultsCallback(null, rows));
      }
    });
  });
}