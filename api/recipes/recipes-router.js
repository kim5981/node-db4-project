const router = require("express").Router()

router.use("*", (req, res, next) => {
    res.json({api: "up"})
})

module.exports = router