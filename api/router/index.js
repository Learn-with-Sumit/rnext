const express = require("express");

const customRoutes = express.Router();

customRoutes.use("/auth", require("./auth.route"));

customRoutes.use("/blogs", require("./blog.route"));

customRoutes.use("/profile", require("./profile.route"));

customRoutes.use("/search", require("./search.route"));

module.exports = customRoutes;
