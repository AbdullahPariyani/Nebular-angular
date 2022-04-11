const cloudProviderSchema = require('../Database/Schemas/cloudProviders')

class Seed {
    async insertCloudProviders(data) {
        try{
            let existed = await cloudProviderSchema.findOne({
                name : data.name
            })
            if(existed) return false;
            cloudProvider = await new cloudProviderSchema(data).save()
            return {
                status : STATUS_CODES.CREATED,
                data : {
                    _id : cloudProvider._id
                }
            };
        }catch(e){
           return false;
        }

       
    }
}

module.exports = Seed;