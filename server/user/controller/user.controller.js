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
                token: "tertewrt12345",
                user_type: req.body.user_type
            })
            return response.sendResponse(res, 200, 'Success', user);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}
/**Admin create api. */
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
/**Admin list api. */
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

/**Company list api. */
async function companyList(req, res) {
    try {
        let rows = await pool.query("SELECT * FROM COMPANY;").then(data => {
            return response.sendResponse(res, 200, 'Success', data);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}
/**Only by company/school. */
async function addOrder(req, res) {
    try {
        // let row = await pool.query(`INSERT INTO ORDER (order_id,created_by,order_type,PASSWORD) VALUES ('${req.body.idADMIN}','ADMIN','${req.body.EMAIL}','${req.body.PASSWORD}');`).then(data => {
        //     return response.sendResponse(res, 200, 'Success', data);
        // }).catch(err => {
        //     return response.sendResponse(res, 400, 'Error', err);
        // });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}
/**Order list */
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
/**Employee add. */
async function addEmployee(req, res) {
    try {
        let row = await pool.query(`INSERT INTO EMPLOYEE (emp_id,first_name,last_name,company_id,emp_type_id) VALUES ('${req.body.emp_id}','${req.body.first_name}','${req.body.last_name}','${req.body.company_id}','${req.body.emp_type_id}');`).then(data => {
            return response.sendResponse(res, 200, 'Success', data);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}
/**Employee List and search. */
async function employeeList(req, res) {
    try {
        let query = ""
        if (req.query.emp_id)
            query = `SELECT * FROM EMPLOYEE WHERE emp_id='${req.query.emp_id}'`
        else
            query = "SELECT * FROM EMPLOYEE;"
        console.log('checck=>', query)
        let rows = await pool.query(query).then(data => {
            return response.sendResponse(res, 200, 'Success', data);
        }).catch(err => {
            return response.sendResponse(res, 400, 'Error', err);
        });
    } catch (err) {
        return response.sendResponse(res, 400, 'Error', err);
    }
}
module.exports = {
    login, companyList, addAdmin, adminList, addOrder, orderList, addEmployee, employeeList
}

