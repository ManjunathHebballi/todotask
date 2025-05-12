import jwt from "jsonwebtoken";
import { refreshToken } from "../services/user.service.js";

export const sendCookies = async (user,res,message,status_code = 200)=>{
    // console.log(user.id+"------------------------------------------")
    const payload={id : user.id};
        const accessToken = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn : process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
        });

    const refresh_token= jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
        });

        await refreshToken(refresh_token,user.id);
// console.log(refresh_token)
        res.status(status_code)
        .cookie("token",accessToken,{
            httpOnly : true,
            sameSite : process.env.NODE_ENV === 'Development' ? 'lax' : none,
            secure : process.env.NODE_ENV === 'Development' ? false : true,
        })
        .cookie("refresh_token", refresh_token, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === 'Development' ? 'lax' : 'none',
            secure: process.env.NODE_ENV === 'Development' ? false : true,
          })
        .json({
            status: true,
            message 
        })
}

  