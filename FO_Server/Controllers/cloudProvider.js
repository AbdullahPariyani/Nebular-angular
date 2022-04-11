const CloudProviderModel = require("../Models/cloudProvider");

class CloudProviderController {
  static listCloudProviders = async (req, res) => {
    try {
      const response = await CloudProviderModel.listCloudProviders();
      if (response) return res.status(200).send(response);
      return res.status(404).send("CloudProvider not found");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = CloudProviderController;
