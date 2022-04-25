const express = require("express");
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();

homeRouter.get("/contact", homeController.contact);
homeRouter.get("/about", homeController.about);
homeRouter.get("/", homeController.home);

module.exports = homeRouter;
