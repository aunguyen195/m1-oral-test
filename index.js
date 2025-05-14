const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");
const path = require("path");
// config
const server = express();
server.use(cors());
server.use(express.static(path.join(__dirname, "./public", "../public")));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// setting up EJS
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "./views", "../views"));

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/", router);
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = server;
