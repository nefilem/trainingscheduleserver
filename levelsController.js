const { ObjectId } = require('mongodb');
const { LevelsDB }  = require('./models/LevelsDB');
const createError = require('http-errors');

/**
 * Returns a list of all Levels from the DB
 * @param  {} req
 * @param  {} res
 */
 exports.index = async function (req,res) {

    // return all data from mongodb
    LevelsDB.find()
     .then( (levelitems) => res.send(levelitems));
}