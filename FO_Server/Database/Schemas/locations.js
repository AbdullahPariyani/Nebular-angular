const mongoose = require("mongoose");

const location = new mongoose.Schema({
    cloudProviderId: { type: mongoose.Schema.Types.ObjectId, ref: 'cloudProvider' },
    name: String,
    value: String
})

module.exports = mongoose.model('locations', location);