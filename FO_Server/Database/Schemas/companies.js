const company = new mongoose.Schema({
    name: String,
    location: String,
    authTokens: [String]
})

module.exports = mongoose.model('companies', company);