const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

// detachmentid >> detachments
// levelid >> levels
// lesson1id/lesson2id >> lessons
// lesson2tutorid/lesson1tutorid >> users
// dresscode >> dress
// equipmentcode >> equipment

const scheduleDBSchema = mongoose.Schema({
    detachmentid: {
        type: String
    },
    levelid: {
        type: String
    },
    lesson1id: {
        type: String
    },
    lesson1tutorid: {
        type: String
    },
    lesson2id: {
        type: String
    },
    lesson2tutorid: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    dresscode: {
        type: Array
    },
    equipmentcode: {
        type: Array
    }
});

module.exports.ScheduleDB = mongoose.model('schedule', scheduleDBSchema, 'schedule');