const { ObjectId } = require('mongodb');
const { ScheduleDB }  = require('./models/ScheduleDB');
const createError = require('http-errors');

/**
 * Returns a list of all schedules from the DB
 * @param  {} req
 * @param  {} res
 */
 exports.index = async function (req,res) {

    // return all data from mongodb
    ScheduleDB.find()
     .then( (scheduleitems) => res.send(scheduleitems));
}