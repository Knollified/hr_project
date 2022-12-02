import express from "express";

import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    deleteEmployee,
    updateEmployee
} from "../controllers/Employees.js";

const router = express.Router();

router.get('/', getAllEmployees);
router.get('/:id',getEmployeeById);
router.post('/',createEmployee);
router.delete('/:id',deleteEmployee);
router.patch('/:id',updateEmployee);

export default router;