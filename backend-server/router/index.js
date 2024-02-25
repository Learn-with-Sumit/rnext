const express = require("express");

const customRoutes = express.Router();

customRoutes.use("/posts", require("./posts.route"));

customRoutes.use("/profile", require("./profile.route"));

customRoutes.use("/auth", require("./user.route"));

module.exports = customRoutes;
