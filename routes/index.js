const express = require("express")
const userControllers = require("../controllers/userControllers")
const router = express.Router()
const validator = require("../controllers/validator")

router.route("/user/signUp")
.post(validator, userControllers.addNewUser)

router.route("/user/signIn")
.post(userControllers.signUser)

module.exports = router