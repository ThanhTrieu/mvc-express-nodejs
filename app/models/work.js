//const moment = require('moment');
const mysql = require('mysql');
const dbconfig = require('../../config/database');
const connection = mysql.createConnection(dbconfig.connection);
// select database - very important
connection.query(`USE ${dbconfig.database}`);

// limit page
const LIMIT_PAGE  = 30;

function resultsCallback(err, records) {
  if (err) {
    console.log(err);
    throw err;
  } else {
    return records;
  }
}

exports.getListTodoWorks = (page) => {
  return new Promise((reslove, reject) => {
    let sqlQuery = "SELECT a.id, a.name, a.type_id, a.status, t.name_work FROM works AS a INNER JOIN type_works AS t ON a.type_id = t.id WHERE a.status = 1 LIMIT ?,?";
    connection.query(sqlQuery,[page,LIMIT_PAGE], (err, rows) => {
      if(err){
        reject(resultsCallback(err, null));
      } else {
        reslove(resultsCallback(null, rows));
      }
    });
  });
}

exports.addDataWorks = (name, type) => {
  return new Promise((reslove, reject) => {
    let sqlQuery = "INSERT INTO works(name, type_id, status, start_date, end_date, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?)";

    connection.query(sqlQuery, [name, type, 1, null, null, null, null], (err) => {
      if(err){
        reject(resultsCallback(err, false));
      } else {
        reslove(resultsCallback(null, true));
      }
    });
  });
}