const express = require("express");

const routes = express.Router();

const connection = require("./database/connection");

const loginController = require("./controllers/userController");
const sessionController = require("./controllers/sessionController");

routes.post("/users", loginController.create);
routes.get("/users", loginController.index);

routes.post("/session", sessionController.create);

module.exports = routes;
