const express = require("express");
const studController = require("../controllers/studController.js");
const studRouter = express.Router();

studRouter.post("/editStud/:id", studController.sendStud);
studRouter.get("/editStud/:id", studController.editStud);
studRouter.post("/delete/:id", studController.delStud);
studRouter.post("/createStud", studController.postStud);
studRouter.get("/createStud", studController.addStud);
studRouter.get("/", studController.getStud);

module.exports = studRouter;