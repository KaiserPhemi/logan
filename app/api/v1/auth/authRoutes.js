// libraries
const express = require("express");

// controller
const authController = require("./authController");

// router
const authRouter = express.Router();

// routes
authRouter.route("/login").post(authController.loginUser);

module.exports = authRouter;
