const express = require('express')
const router = express.Router()

const SeedsController = require('../Controllers/company');
const seedsController = new SeedsController();

//ROUTES
//router.route('/cloudProvider')
    //.post(seedsController.postCloudProvider)


module.exports = router