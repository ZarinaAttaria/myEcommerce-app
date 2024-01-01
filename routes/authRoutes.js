import express from "express";
import { registerController,logincontroller,testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controller/authController.js';
import { isAdmin } from "../middlewares/authMiddlewares.js";
import { requireSignIn } from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.post('/register', registerController);
router.post('/login',logincontroller);
router.post('/forgot-Password',forgotPasswordController);

router.get("/test",requireSignIn,isAdmin,testController);
//protected user route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//protected admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController
);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;
