const { ObjectId } = require('mongodb');
const { DetachmentsDB }  = require('./models/DetachmentsDB');
const createError = require('http-errors');

/**
 * Returns a list of all Detachments from the DB
 * @param  {} req
 * @param  {} res
 */
 exports.index = async function (req,res) {

    // return all data from mongodb
    DetachmentsDB.find()
     .then( (detachmentitems) => res.send(detachmentitems));
}