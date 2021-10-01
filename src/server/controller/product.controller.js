import productModel from "../models/product.model";

const getProducts = async (req, res) => {
    try{
        let products = await productModel.find();
        return res.status(200).json(products);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })
    }
};

const controller = {getProducts};
export default controller;