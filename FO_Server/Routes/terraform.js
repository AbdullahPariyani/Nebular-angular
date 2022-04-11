const express = require("express");
const router = express.Router();

const TerraformController = require("../Controllers/terraform");
const terraformController = new TerraformController();

//ROUTE

router.route("/generate-terraform").get(terraformController.generateTerraform);

module.exports = router;
