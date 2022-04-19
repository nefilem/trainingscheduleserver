const mongoose = require('mongoose');

const usersDBSchema = mongoose.Schema({
    rank: {
        type: String,
        default: ''
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,               
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'user'        
    }

});

module.exports.UsersDB = mongoose.model('users', usersDBSchema, 'users');