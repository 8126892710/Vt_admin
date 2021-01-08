const response = require('../../../config/responder');
const jwt = require('jsonwebtoken');
const sql = require('../../../app');
const mariadb = require('mariadb');
const _ = require('lodash');

/**-----Database connect----------*/

const pool = mariadb.createPool({
    host: 'devqmgmtdb.ckokwzbm6gky.eu-central-1.rds.amazonaws.com',
    user: 'ordmgmt_admin',
    password: 'Log20rdmgmt',
    database: 'ordmgmtinit',
    connectionLimit: 5
});

/**Login api for admin. */
async function login(req, res) {
    if (!req.body.email || !req.body.password)
        return response.sendResponse(res, 400, 'Parameter missing.');
    try {
        let q = `SELECT * FROM ADMIN WHERE EMAIL='${req.body.email}' AND PASSWORD='${req.body.password}'`;
        let rows = await pool.query(q).then(data => {
            if (!data.length)
            return response.sendResponse(res, 404, 'Invalid Email/Password.', data);
            let user = _.head(data);
            user = _.extend(user, {
                token:"tertewrt12345",
                user_type:req.body.user_type
            })
            return response.sendResponse(res, 200, 'Success', user);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}

async function addAdmin(req, res) {
    try {
        let row = await pool.query(`INSERT INTO ADMIN (idADMIN,ROLE,EMAIL,PASSWORD) VALUES ('${req.body.idADMIN}','ADMIN','${req.body.EMAIL}','${req.body.PASSWORD}');`).then(data => {
            return response.sendResponse(res, 200, 'Success', data);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}

async function adminList(req, res) {
    try {
        let rows = await pool.query("SELECT * FROM ADMIN;").then(data => {
            return response.sendResponse(res, 200, 'Success', data);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}


async function companyList(req, res) {
    try {
        let rows = await pool.query("SELECT * FROM ADMIN;").then(data => {
            return response.sendResponse(res, 200, 'Success', data);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}
async function addOrder(req, res) {
    // try {
    //     let row = await pool.query(`INSERT INTO ORDER (idADMIN,ROLE,EMAIL,PASSWORD) VALUES ('${req.body.idADMIN}','ADMIN','${req.body.EMAIL}','${req.body.PASSWORD}');`).then(data => {
    //         return response.sendResponse(res, 200, 'Success', data);
    //     }).catch(err => {
    //         return response.sendResponse(res, 400, 'Error', err);
    //     });
    // } catch (err) {
    //     return response.sendResponse(res, 400, 'Error', err);
    // }
}
async function orderList(req, res) {
    try {
        let rows = await pool.query("SELECT * FROM ORDER;").then(data => {
            return response.sendResponse(res, 200, 'Success', data);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error1', err);
    }
}

module.exports = {
    login, companyList, addAdmin, adminList, addOrder, orderList
}

