const express = require("express"); 
const router = express.Router(); 
const { addStudent } = require("../controllers/studentController"); 
 
router.post("/", addStudent); 
 
module.exports = router; 