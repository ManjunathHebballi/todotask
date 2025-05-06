import jwt from "jsonwebtoken";
import { User } from "../models/user.js";


export const isAuthenticated= async (req, res, next) => {
const {token} = req.cookies;
    // console.log(token)
    
    if(!token) return res.status(404).json({
        status : false,
        user : "Token expired"
    });
     const decoded= jwt.verify(token, process.env.JWT_SECRET)
    //  console.log(decoded)
    req.user= await User.findById(decoded._id)
    next();
}