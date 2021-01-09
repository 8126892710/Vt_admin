const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config/db')
const userRoute = require('./server/user/route/user.route');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');

/**-----Database connect----------*/

const pool = mariadb.createPool({
    host: 'devqmgmtdb.ckokwzbm6gky.eu-central-1.rds.amazonaws.com',
    user: 'ordmgmt_admin',
    password: 'Log20rdmgmt',
    database: 'ordmgmtinit',
    connectionLimit: 5
});
let connection = pool.getConnection();
//INSERT INTO company_type (company_type_id,type_desc) VALUES (2541256352,'IT')
async function main() {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log('Server connected.')
    } catch (err) {
        console.log('Server not connected:', err)
    } finally {
        if (conn) {
            console.log('Server connected.')
        } else {
            console.log('Server not connected.')
        }
    }
}
main();


module.exports = {
    connection, pool
}

app.use(
    bodyParser.json({ type: "application/json", limit: "50mb", extended: true })
);
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 1000000,
    })
);
app.use(cors());
/**-----------Routes------------------ */
app.use('/api/admin', userRoute)
/**----------------------------------- */
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
})