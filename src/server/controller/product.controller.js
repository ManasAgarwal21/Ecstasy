import productModel from "../models/product.model";
import userModel from "../models/user.model";

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
const getUsers = async (req, res) => {
    try{
        let users = await userModel.find();
        return res.status(200).json(users);
    }catch(err){
        return res.status(400).json({
            error: err.message
        })
    }
};

const controller = {getProducts, getUsers};
export default controller;