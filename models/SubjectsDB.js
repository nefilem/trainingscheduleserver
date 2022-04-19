const mongoose = require('mongoose');

const subjectsDBSchema = mongoose.Schema({
    newid: {
        type: String,
        required: true,
        unique: true 
    },
    oldsubjectid: {
        type: String,
        required: false        
    },
    description: {
        type: String,
        required: true
    }
});

module.exports.SubjectsDB = mongoose.model('subjects', subjectsDBSchema, 'subjects');