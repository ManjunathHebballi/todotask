import ErrorHandler from "../middlewares/error.middlewares.js";
import { deleteToken, token_data } from "../services/refreshToken.service.js";
import { sendCookies } from "../utils/features.utils.js";

export const refresh_token = async(req,res,next)=>{
    const token=req.cookies.refresh_token;
    if (!token) return next(new ErrorHandler('Refresh token not found',400));
    // console.log(token)
    const tokenRecord =await token_data(token);

    const user = { id: tokenRecord.user_id };
    sendCookies(user,res,"Token Refreshed",200);
    
}

export const delete_token = async(req,res,next)=>{
    const token = req.body.refresh_token;
    if (!token) return next(new ErrorHandler('Refresh token not found',400));
    // console.log(token)
    const token_data=await deleteToken(token);
    res.status(200).json({
        status:true,
        message:"Deleted Successfully"
    })
    
    
} 
