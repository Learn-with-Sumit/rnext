/**
 * Express router for handling profile-related routes.
 * @module router/profile
 */

const express = require("express");
const { ProfileController } = require("../controller/profile.controller");
const uploadAvatar = require("../middleware/uploadAvatar");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();

/**
 * Route for getting user profile.
 * @name GET /profile/:userId
 * @function
 * @memberof module:router/profile
 * @param {string} userId - The ID of the user.
 * @returns {object} The user profile.
 */
router.get("/:userId", ProfileController.getUserProfile);

/**
 * Route for updating user profile.
 * @name PATCH /profile/:userId
 * @function
 * @memberof module:router/profile
 * @param {string} userId - The ID of the user.
 * @param {File} avatar - The avatar image file to upload.
 * @returns {object} The updated user profile.
 */
router.patch("/", checkAuth, uploadAvatar.single("avatar"), ProfileController.updateUserProfile);

/**
 * Route for uploading user avatar.
 * @name POST /profile/:userId/avatar
 * @function
 * @memberof module:router/profile
 * @param {string} userId - The ID of the user.
 * @param {File} avatar - The avatar image file to upload.
 * @returns {object} The uploaded avatar details.
 */
router.post("/avatar", checkAuth, uploadAvatar.single("avatar"), ProfileController.uploadAvatar);

module.exports = router;
