import { 
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    countUsers,
    sortUsers,
    limitOfSortedUsers
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post('/create', createUser);
router.get('/get-all', getAllUsers);
router.get('/get', getUser);
router.delete('/delete', deleteUser);
router.put('/update', updateUser);

router.get('/count', countUsers);
router.get('/sort', sortUsers);
router.get('/sort-and-limit', limitOfSortedUsers);

export default router;
