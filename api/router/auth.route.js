const express = require("express");
const { AuthController } = require("../controller/auth.controller");
const catchAsync = require("../util/catchAsync");

const router = express.Router();

router.post("/login", catchAsync(AuthController.login));
router.post("/register", catchAsync(AuthController.register));
router.post("/refresh-token", catchAsync(AuthController.refreshToken));

module.exports = router;
