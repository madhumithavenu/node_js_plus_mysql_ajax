const express = require("express");

const { homePage, insertValues} = require("../controllers/students-controller.js");

const studentRouter = express.Router();

studentRouter.get("/", homePage);
studentRouter.post("/", insertValues);
// studentRouter.get("/student", getStudent);
// studentRouter.get("/delete-student", deleteStudent);
// studentRouter.get("/update-student", updateStudent);
// studentRouter.post("/update-student", updateStudentDetails);
// studentRouter.get("/search-students", searchStudents );
// studentRouter.get("/search", searchStudentsDetails);

module.exports = studentRouter;