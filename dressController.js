const { ObjectId } = require('mongodb');
const { DressDB }  = require('./models/DressDB');
const createError = require('http-errors');

/**
 * Returns a list of all Dress from the DB
 * @param  {} req
 * @param  {} res
 */
 exports.index = async function (req,res) {

    // return all data from mongodb
    DressDB.find()
     .then( (dressitems) => res.send(dressitems));
}