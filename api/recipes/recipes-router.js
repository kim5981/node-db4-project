const router = require("express").Router()

router.use("*", (req, res, next) => {
    res.json({api: "up"})
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: "oops :(",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router