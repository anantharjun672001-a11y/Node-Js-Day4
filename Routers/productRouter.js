import express from "express";
import { createProduct, getProductById, getProducts, updateProduct } from "../Controllers/productController.js";


const router = express.Router();

router.post("/create",createProduct)

router.get("/getdata",getProducts);

router.get("/getdata/:id",getProductById);


router.put("/update/:id",updateProduct)


export default router;
