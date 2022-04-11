const ResourceModel = require('../Models/resource')

class ResourceController {
    static listResourcesByCloudProviderId = async (req, res) => {
        try {
            const id = req.params.id
            const response = await ResourceModel.listResourcesByCloudProviderId(id)
            if (response) return res.status(200).send(response)
            return res.status(404).send('Resource not found')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ResourceController