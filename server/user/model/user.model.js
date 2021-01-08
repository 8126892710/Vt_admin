// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const { isEmail } = require('validator');

// const user = new Schema({
//     role: {
//         type: String,
//         enum: ['admin', 'user']
//     },
//     name: { type: String },
//     email: {
//         type: String,
//         trim: true, 
//         unique: true,
//         lowercase: true,
//         validate: [isEmail, 'Invalid Email.']
//     },
//     password: { type: String },
//     status: {
//         type: String,
//         enum: ['active', 'inactive'],
//         default: 'active'
//     },
//     profilePic: { type: String },
//     bio: { type: String },
//     token: { type: String }
// }, {
//         timestamps: true, collection: 'user'
//     })
// module.exports = mongoose.model('user', user)



