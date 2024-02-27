const jsonServer = require("json-server");
const router = jsonServer.router("./database/db.json");

module.exports = router;
