const resources = require('../Database/Schemas/resources')

class Resource {
    static listResourcesByCloudProviderId = async (cloudProviderId) => {
        try {
            const response = await resources.find({ cloudProviderId }, { __v: 0 })
            return response
        } catch (error) {
            throw error
        }
    }
}

module.exports = Resource