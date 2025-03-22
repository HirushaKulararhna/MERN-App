const express = require("express");
const router = express.Router();

const User = require("../Model/UserModel");

const userController = require("../Controllers/UserControllers");

router.get("/", userController.getAllUsers);

module.exports = router;