"use strict";

const TypeWorkModel = require('../../models/typeWorks');
const WorkModel = require('../../models/work');

// token
const jwt = require('jsonwebtoken');
const secretKey = 'nguyenthanhtrieu';

exports.listDataWorkTodo = async (req, res) => {
  const data = {};
  data.message = 'ERR';
  data.result = null;
  data.error  = null;

  const token = req.header('Authorization');
  const page  = req.query.page ? req.query.page : 1;

  if(token){
    const decodeToken = await jwt.verify(token, secretKey);
    if(decodeToken){
      await WorkModel.getListTodoWorks(page-1).then((err, res) => {
        if(err){
          data.message = 'FAIL';
          data.result  = err;
        } else {
          data.message = 'OK';
          data.result  = res;
        }
      });
    }
  }
  res.json(data);
}

exports.addTodo = async  (req, res) => {
  const data = {};
  data.message = 'ERR';
  data.result = null;
  data.error  = null;

  const token = req.header('Authorization');
  const name = req.body.name;
  const type = req.body.type;
  if(token){
    const decodeToken = await jwt.verify(token, secretKey);
    if(decodeToken && name && type){
      await WorkModel.addDataWorks(name, type).then( res => {
        if(res){
          data.message = 'OK';
          data.result = 'Add new success';
        } else {
          data.message = 'FAIL';
          data.result = 'Add new fail';
        }
      });
    } else {
      data.message = 'INVALID_INPUT';
      data.result = 'Add new fail';
    }
  } else {
    data.message = 'INVALID_TOKEN';
    data.result = 'Add new fail';
  }
  res.json(data);
}

exports.getDataTypeWork = async (req, res) => {

  const listTypeWorks = {};
  listTypeWorks.message = 'ERR';
  listTypeWorks.result  = [];

  const token = req.header('Authorization');
  // validate token
  if(token) {
    const decodeToken = await jwt.verify(token, secretKey);
    if(decodeToken){
      await TypeWorkModel.getAllDataTypeWorks()
      .then(rows => {
        listTypeWorks.message = 'OK'
        listTypeWorks.result  = rows;
      });
    } 
  }
  res.json(listTypeWorks);
}