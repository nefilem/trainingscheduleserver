const { ObjectId } = require('mongodb');
const { EquipmentDB }  = require('./models/EquipmentDB');
const createError = require('http-errors');

/**
 * Returns a list of all Equipment from the DB
 * @param  {} req
 * @param  {} res
 */
 exports.index = async function (req,res) {

    // return all data from mongodb
    EquipmentDB.find()
     .then( (equipmentitems) => res.send(equipmentitems));
}