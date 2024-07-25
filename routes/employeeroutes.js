const express = require('express');
const router = express.Router();
const employeeController= require('../controllers/employeeContoller');
const Employee = require('../modals/Employee');

router.post('/addemp',employeeController.createEmployee);
router.get('/getemp',employeeController.getEmployee);
router.get('/getemp/:id',employeeController.singleEmployee);
router.put('/update/:id',employeeController.updateEmployee)
router.delete('/delete/:id',employeeController.deleteEmployee);


module.exports = router;