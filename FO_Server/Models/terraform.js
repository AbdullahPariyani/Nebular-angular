const cloudProviderSchema = require("../Database/Schemas/cloudProviders");

class Terraform {
  async insertCloudProviders(data) {
    try {
      let cloudProvider = await cloudProviderSchema.findOne({
        name: data.name,
      });
      if (cloudProvider)
        return {
          status: STATUS_CODES.ALREADY_REPORTED,
          message: "Already Existed",
          data: {
            _id: cloudProvider._id,
          },
        };
      cloudProvider = await new cloudProviderSchema(data).save();
      return {
        status: STATUS_CODES.CREATED,
        data: {
          _id: cloudProvider._id,
        },
      };
    } catch (e) {
      return false;
    }
  }
}

module.exports = Terraform;
