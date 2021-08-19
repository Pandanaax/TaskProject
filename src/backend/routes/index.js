var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Use user route */
router.use("/user", require("../models/User"));

module.exports = router;
