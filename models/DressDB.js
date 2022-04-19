const mongoose = require('mongoose');

const dressDBSchema = mongoose.Schema({
    dresscode: {
        type: String,
        required: true,
        unique: true 
    },
    description: {
        type: String,
        required: true
    }
});

module.exports.DressDB = mongoose.model('dress', dressDBSchema, 'dress');