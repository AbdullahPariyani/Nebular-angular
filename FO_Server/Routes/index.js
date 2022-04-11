module.exports = app => {
    app.get('/', (req, res) => {
        res.status(STATUS_CODES.SUCCESS)
            .send("Welcome to " + process.env.PROJECT_NAME)
    })

    app.use("/terraform", require('./terraform'))
    app.use("/company", require('./company'))
    app.use("/list", require('./list'))

}