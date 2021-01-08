const userModel = require('../server/user/model/user.model');
const response = require('../config/responder');
const jwt = require('jsonwebtoken');

/** verify user token api. */
var my_secret_key = 'my_secret_key';
const verifyJWT = (req, res, next) => {
    var token = req.headers["x-access-token"]
    if (!token)
        response.sendResponse(res, 401, "Invalid token.");
    else {
        jwt.verify(token, my_secret_key, (err, decoded) => {
            if (err) {
                return response.sendResponse(res, 401, 'Invalid token', err)
            } else {
                // userModel.findOne({ _id: decoded.id }).lean().exec(function (err, user) {
                //     req.user = user;
                //     if (user != null) {
                //         if (token == user.token)
                //             return next();
                //         return response.sendResponse(res, 401, 'Invalid token.');
                //     } else {
                //         return response.sendResponse(res, 401, 'User does not exist.');
                //     }
                // })
            }
        });
    }
}


module.exports = {
    verifyJWT
}