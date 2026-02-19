import product from "../Models/productSchema.js";

//create product

export const createProduct = async (req,res) =>{
    try{
        const newProduct = new product(req.body);
        await newProduct.save();
        res.status(200).json({message:"Product Created Successfully",data:newProduct});
    }catch(error){
        res.status(501).json({message:"Error creating product"});
    }
}


//get products

export const getProducts = async (req,res) =>{
    try {
        const getAllProducts = await product.find();
        res.status(200).json({message:"Products fetched successfully",data:getAllProducts});
    } catch (error) {
        res.status(501).json({message:"Error Get products"});
    }
}