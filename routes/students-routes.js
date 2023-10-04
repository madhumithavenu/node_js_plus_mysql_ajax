const express = require("express");

const { homePage, insertValues, getStudent, deleteStudent, updateStudent, updateStudentDetails} = require("../controllers/students-controller.js");

const studentRouter = express.Router();

studentRouter.get("/", homePage);
studentRouter.post("/", insertValues);
studentRouter.get("/student", getStudent);
studentRouter.get("/delete-student", deleteStudent);
studentRouter.get("/update-student", updateStudent);
studentRouter.post("/update-student", updateStudentDetails);

module.exports = studentRouter;