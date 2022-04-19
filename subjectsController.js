const { ObjectId } = require('mongodb');
const { SubjectsDB }  = require('./models/SubjectsDB');
const createError = require('http-errors');

/**
 * Returns a list of all Subjects from the DB
 * @param  {} req
 * @param  {} res
 */
 exports.index = async function (req,res) {

    // return all data from mongodb
    SubjectsDB.find()
     .then( (subjectitems) => res.send(subjectitems));
}