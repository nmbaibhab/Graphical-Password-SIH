const express = require("express");
const router = express.Router();

const { register, login, grammar } = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/grammar").get(grammar);

module.exports = router;
