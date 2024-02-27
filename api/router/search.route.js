const express = require("express");
const catchAsync = require("../util/catchAsync");
const { SearchController } = require("../controller/search.controller");

const router = express.Router();

router.get("/", catchAsync(SearchController.search));

module.exports = router;
