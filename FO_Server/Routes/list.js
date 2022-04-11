const express = require('express')
const router = express.Router()

const CloudProviderController = require('../Controllers/cloudProvider')
const ResourceController = require('../Controllers/resource')
const LocationController = require('../Controllers/location')
const ResourceAndLocationController = require('../Controllers/resourceandlocation')

//ROUTES
router.route('/cloudProviders')
    .get(CloudProviderController.listCloudProviders)

router.route('/resource/:id')
    .get(ResourceController.listResourcesByCloudProviderId)

router.route('/location/:id')
    .get(LocationController.listLocationsByCloudProviderId)

router.route('/resourceandlocation/:id')
    .get(ResourceAndLocationController.listResourcesAndLocationsByCloudProviderId)


module.exports = router