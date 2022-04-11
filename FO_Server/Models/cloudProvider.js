const cloudProviders = require('../Database/Schemas/cloudProviders')

class CloudProvider {
    static listCloudProviders = async () => {
        try {
            const response = await cloudProviders.aggregate([
                {
                    $project: {
                        key: '$_id',
                        value: '$name',
                        _id: 0
                    }
                }
            ])
            return response
        } catch (error) {
            throw error
        }
    }
}

module.exports = CloudProvider