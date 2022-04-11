const LocationModel = require('../Models/location')

class LocationController {
    static listLocationsByCloudProviderId = async (req, res) => {
        try {
            const id = req.params.id
            const response = await LocationModel.listLocationsByCloudProviderId(id)
            if (response) return res.status(200).send(response)
            return res.status(404).send('Location not found')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = LocationController