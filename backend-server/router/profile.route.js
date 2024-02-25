const express = require("express");
const { ProfileController } = require("../controller/profile.controller");
const upload = require("../middleware/multer");

const router = express.Router();

router.get("/:userId", ProfileController.getUserProfile);
router.patch("/:userId", upload.single("avatar"), ProfileController.updateUserProfile);
router.post("/:userId/avatar", upload.single("avatar"), ProfileController.uploadAvatar);

module.exports = router;
