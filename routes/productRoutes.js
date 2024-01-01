import express from "express";


import formidable from "express-formidable";
import {  brainTreePaymentController, braintreeTokenController, createProductController,deleteProductController,getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controller/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

const router = express.Router();

//routes
router.post(
  "/create-product", requireSignIn, isAdmin, formidable(),createProductController
);

//get products
router.get("/get-product", getProductController);
//single product
router.get("/get-product/:slug", getSingleProductController);
//get photo
router.get("/product-photo/:pid", productPhotoController);
///delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
router.post("/product-filters",productFiltersController);
router.get("/product-count",productCountController);
router.get("/product-list/:page", productListController);
router.get("/search/:keyword", searchProductController);
router.get("/related-product/:pid/:cid", relatedProductController);
//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);
export default router;
