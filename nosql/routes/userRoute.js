import express from "express";
import { 
    addUser,
    deleteUser,
    updateUser,
    getAllUsers
 } from "../controllers/userController.js";

const router = express.Router();

router.post('/add', addUser);

router.delete('/delete/:name', deleteUser);

router.put('/update/:name', updateUser);

router.get('/get-all', getAllUsers);

export default router;