const ResourceModel = require('../Models/resource')
const LocationModel = require('../Models/location')

class ResourceAndLocationController {
    static listResourcesAndLocationsByCloudProviderId = async (req, res) => {
        try {
            const id = req.params.id
            const resources = await ResourceModel.listResourcesByCloudProviderId(id)
            const locations = await LocationModel.listLocationsByCloudProviderId(id)
            const response = { resources, locations }

            return res.status(200).send(response)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ResourceAndLocationController