const express = require('express');
const router = express.Router();
//const eventsdb = require('./eventsDBController');
const usersinfo = require('./usersController');
const scheduleinfo = require('./scheduleController');
const lessonsinfo = require('./lessonsController');
const levelsinfo = require('./levelsController');
const dressinfo = require('./dressController');
const equipmentinfo = require('./equipmentController');
const detachmentsinfo = require('./detachmentsController');
const subjectsinfo = require('./subjectsController');

//const baseurl = "/EventsDB";
//const userbaseurl = "/userInfo";

const schedulebaseurl = "/schedule";
const lessonsbaseurl = "/lessons";
const usersbaseurl = "/users";
const subjectsbaseurl = "/subjects";
const levelsbaseurl = "/levels";
const equipmentbaseurl = "/equipment";
const dressbaseurl = "/dress";
const detachmentsbaseurl = "/detachments";

// detachments
router.get(detachmentsbaseurl, detachmentsinfo.index);

// dress
router.get(dressbaseurl, dressinfo.index);

// equipment
router.get(equipmentbaseurl, equipmentinfo.index);

// levels
router.get(levelsbaseurl, levelsinfo.index);

// subjects
router.get(subjectsbaseurl, subjectsinfo.index);

// users
router.get(usersbaseurl, usersinfo.index);

// lessons
router.get(lessonsbaseurl, lessonsinfo.index);

// schedule
router.get(schedulebaseurl, scheduleinfo.index);

//router.post(baseurl + '/create', eventsdb.create);
//router.put(baseurl + '/:id', eventsdb.update);
//router.get(baseurl + '/getRandomEvents', eventsdb.getRandomEvents)
//router.get(baseurl + '/search/:field/:value', eventsdb.search);
//router.get(baseurl + '/:id',eventsdb.show);
//router.get(baseurl, eventsdb.index);
//router.delete(baseurl + '/deleteAll', eventsdb.deleteAll);
//router.delete(baseurl + '/:id', eventsdb.delete);

//router.post(userbaseurl + "/register", userinfo.register);
//router.post(userbaseurl + "/login", userinfo.login);

module.exports = router;