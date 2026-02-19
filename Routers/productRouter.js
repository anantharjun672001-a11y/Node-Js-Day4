import express from "express";
import { createProduct, getProductById, getProducts } from "../Controllers/productController.js";


const router = express.Router();

router.post("/create",createProduct)

router.get("/getdata",getProducts);

router.get("/getdata/:id",getProductById);


export default router;
