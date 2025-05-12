import db from "../config/db.js"
import ErrorHandler from "../middlewares/error.middlewares.js";


export const token_data= async(token)=>{
    const tokenRecord =await db.refreshTokens.findFirst({
        where : {
           token 
        }
    })
    // console.log(token)
        if (!tokenRecord ) throw new ErrorHandler("Invalid refresh token", 401);
    
        await db.refreshTokens.delete({
            where : {
                id: tokenRecord.id
            }
        })
        return tokenRecord ;
}

export const deleteToken = async(token) =>{
    
    // console.log(token)
    const token_data=await db.refreshTokens.findFirst({
        where : {
            token
        }
    })
// console.log(token)
    if (!token_data) throw new ErrorHandler("Invalid refresh token", 401);

    await db.refreshTokens.delete({
        where : { 
            id : token_data.id
        }
    })
}