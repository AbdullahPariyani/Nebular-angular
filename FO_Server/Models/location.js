const { ObjectId } = require('mongodb');
const locations = require('../Database/Schemas/locations')

class Location {
    static listLocationsByCloudProviderId = async (cloudProviderId) => {
        try {
            const response = await locations.aggregate([
                {
                    $match: {
                        cloudProviderId: ObjectId(`${cloudProviderId}`)
                    }
                },
                {
                    $project: {
                        label: '$name',
                        value: '$value',
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

module.exports = Location