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

