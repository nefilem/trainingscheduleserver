const mongoose = require('mongoose');

const levelsDBSchema = mongoose.Schema({
    levelid: {
        type: String,
        required: true,
        unique: true
    },
    leveldescription: {
        type: String,
        required: true
    }
});

module.exports.LevelsDB = mongoose.model('levels', levelsDBSchema, 'levels');