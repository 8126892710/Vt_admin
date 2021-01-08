const app = require('express').Router();
const userCtrl = require('../controller/user.controller')
const path = require('path');
const auth = require('../../../config/helper');

app.post('/addAdmin', userCtrl.addAdmin);
app.get('/adminList', userCtrl.adminList);
app.post('/login', userCtrl.login);
app.get('/companyList', userCtrl.companyList);
app.get('/orderList', userCtrl.orderList);
app.post('/addOrder', userCtrl.addOrder);

module.exports = app;

