var express = require("express");
const User = require("../models/User");
var UserController = require("../controllers/User");
var router = express.Router();

/* GET users listing. */
router.get("/register", UserController.register);
/* Post users create */
// router.post("/", UserController.users_create);
// /* Post find email user */
// router.get("/:email", UserController.get_by_email);

module.exports = router;
