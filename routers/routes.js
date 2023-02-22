const express = require("express")

const router = express.Router()
const Controllers = require("../controllers/controller")

router.get("/",Controllers.IndexpageGet)



module.exports = router