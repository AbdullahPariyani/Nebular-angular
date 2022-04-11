const mongoose = require("mongoose");

const cloudProvider = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('cloudproviders', cloudProvider);