import { reatingProduct, getAllproducts, getProduct, createProduct, updateProduct, deleteProduct} from "../controller/product.controller.js";
import express from "express";
const router = express.Router();

// RATING PRODUCT ROUTE
router.put("/rating/:productId", reatingProduct);

// GET ALL PRODUCTS
router.get("/", getAllproducts);

// GET ONE PRODUCT
router.get("/find/:id", getProduct);

// create product
router.post("/", createProduct);

// UPDATE PRODCUT
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);


export default router;