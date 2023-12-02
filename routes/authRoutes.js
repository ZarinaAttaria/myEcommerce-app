import express from "express";
import { registerController,logincontroller,testController,} from '../controller/authController.js';
import { isAdmin } from "../middlewares/authMiddlewares.js";
import { requireSignIn } from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.post('/register', registerController);
router.post('/login',logincontroller);
router.get("/test",requireSignIn,isAdmin,testController);
export default router;
