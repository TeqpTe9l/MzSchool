const express = require("express");
const teacherController = require("../controllers/teacherController.js");
const teacherRouter = express.Router();

teacherRouter.post("/editTeacher/:id", teacherController.sendTeacher);
teacherRouter.get("/editTeacher/:id", teacherController.editTeacher);
teacherRouter.post("/delete/:id", teacherController.delTeacher);
teacherRouter.post("/createTeacher", teacherController.postTeacher);
teacherRouter.get("/createTeacher", teacherController.addTeacher);
teacherRouter.get("/", teacherController.getTeacher);

module.exports = teacherRouter;