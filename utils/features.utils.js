import jwt from "jsonwebtoken";

export const sendCookies = (user,res,message,status_code = 200)=>{
    const token = jwt.sign({_id : user._id},process.env.JWT_SECRET)
        res.status(status_code).cookie("token",token,{
            httpOnly : true,
            maxAge : 15 * 60 * 1000, // 15min time in millisecond
            sameSite : process.env.NODE_ENV === 'Development' ? 'lax' : none,
            secure : process.env.NODE_ENV === 'Development' ? false : true,
        }).json({
            status: true,
            message 
        })
}