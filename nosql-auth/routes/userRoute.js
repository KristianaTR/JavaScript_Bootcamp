import { 
    createUser,
    getAllUsers,
    deleteAllUsers,
    getUser,
    deleteUser,
    updateUser,
    countUsers,
    sortUsers,
    limitOfSortedUsers,
    loginUser
} from "../controllers/userController.js";
import express from "express";
import { verifySessionToken } from "../middlewares/authenticationCheck.js";

const router = express.Router();

router.post('/create', createUser);

router.post('/login', loginUser);

router.get('/get', verifySessionToken, getUser);

router.delete('/delete', verifySessionToken, deleteUser);

router.put('/update/:userName', verifySessionToken, updateUser);

router.get('/get-all', verifySessionToken, getAllUsers); //admins

router.delete("/delete-all", verifySessionToken, deleteAllUsers); //ADMINS

router.get('/count', countUsers);
router.get('/sort', sortUsers);
router.get('/sort-and-limit', limitOfSortedUsers);

export default router;
