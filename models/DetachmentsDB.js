const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const detachmentsSchemaDB = mongoose.Schema({
    detachmentid : {
        type: String,
        required: true,
        unique: true
    },
    description : {
        type: String,
        required: true
    }
});

module.exports.DetachmentsDB = mongoose.model('detachments', detachmentsSchemaDB, 'detachments');