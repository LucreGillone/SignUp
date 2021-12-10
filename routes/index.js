const express = require("express")
const userControllers = require("../controllers/userControllers")
const router = express.Router()

router.route("/user/signUp")
.post(userControllers.addNewUser)

module.exports = router