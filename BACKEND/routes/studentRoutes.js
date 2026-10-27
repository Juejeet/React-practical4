const express = require("express"); 
const router = express.Router(); 
const { addStudent, getStudents, updateStudent, deleteStudent } = require("../controllers/studentController");

router.put("/:id", updateStudent); 
router.post("/", addStudent); 
router.get("/", getStudents);
router.delete("/:id", deleteStudent);
router.patch("/:id",updateStudent); 
module.exports = router; 

