import express from "express";
import { createProduct, getProducts } from "../Controllers/productController.js";


const router = express.Router();

router.post("/create",createProduct)

router.get("/getdata",getProducts);


export default router;
