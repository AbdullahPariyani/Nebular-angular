const mongoose = require("mongoose");

const resource = new mongoose.Schema({
    cloudProviderId: { type: mongoose.Schema.Types.ObjectId, ref: 'cloudProvider' },
    name: String,
    value: String,
    dependencies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'resource' }],
    message: String
})

module.exports = mongoose.model('resources', resource);