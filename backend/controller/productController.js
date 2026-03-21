import { asyncHandler } from "../middleware/asyncHandler.js";
import Product from "../Model/ProductModel.js"


export const getProducts = asyncHandler (async (req,res,next) =>{
    
        const products = await Product.find();
        res.status(200).json({
            status: 'Success',
            products
        });
    
})

export const getProductById = asyncHandler(async (req, res,next)=>{
    const product= await Product.findById(req.params.id);
    if(product){
        res.status(200)
            .json({
                status: 'Success',
                product
            })
    }
    
})