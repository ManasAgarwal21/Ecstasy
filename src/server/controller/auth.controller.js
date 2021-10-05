import UserSchema from "../models/user.model";
import jwt from "jsonwebtoken";
import config from "../config/config";

const signin = async (req, res) => {
    try{
        let user = await UserSchema.findOne({"email": req.body.email});
        if(!user) return res.status(401).json({error: "User not found!"});
        if(!user.authenticate(req.body.password)) return res.status(401).json({error: "Email and password don't match!"});

        const token = jwt.sign({
            _id: user._id
        }, config.jwtSecret);

        return res.status(200).json({
            token: token
        });
    }
    catch(err){
        return res.status(400).json({
            error: err
        })
    }
}

export default signin;