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


//get product by id

export const getProductById = async (req,res) =>{
    try {
        const productId = req.params.id;
        const productDeatils = await product.findById(productId);
        if(!productDeatils){
            res.status(404).json({message:"Product not found"});
        }
        res.status(200).json({message:"Product fetched successfully",data:productDeatils});
    } catch (error) {
        res.status(501).json({message:"Error Get product by id"});
    }
}


//update product

export const updateProduct = async (req,res) =>{
    try {
        const productId = req.params.id;
        const {name,price}= req.body;
        const result = await product.findByIdAndUpdate(
            {_id:productId},
            {name,price},
            {new:true}  
        );
        if(!result){
            res.status(404).json({message:"Product not found"});
        }
        
        res.status(200).json({message:"Product updated successfully",data:prod});
    } catch (error) {
        res.status(501).json({message:"Error Update product "});
    }
}


//delete product

export const deleteProduct = async (req,res) =>{
    try {
        const productId= req.params.id;
        const result = await product.findByIdAndDelete({_id:productId});
        if(!result){
            res.status(404).json({message:"Product not found"});
        }
        const prod = await product.find();

        res.status(200).json({message:"Product deleted successfully",data:prod});
    } catch (error) {
        res.status(501).json({message:"Error Delete product "});
    }
}
