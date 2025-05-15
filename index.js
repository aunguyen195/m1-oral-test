const jsonServer = require("json-server");
const express = require("express");
const path = require("path");

// config
const server = express();

const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use("/", middlewares, router);
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = server;
