const mongoose = require('mongoose');

const lessonsDBSchema = mongoose.Schema({
    levelid: {
        type: String
    },
    subjectid: {
        type: String
    },
    subjectno: {
        type: String
    },
    lessondescription:{
        type: String
    },
    other: {
        type: Array
    }
});

module.exports.LessonsDB = mongoose.model('lessons', lessonsDBSchema, 'lessons');