import db from "../config/db.js"
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

export const loginCheck = async(userData) => {
  
     const {email, password} = userData;
 
     let user = await db.users
     .findFirst({ 
        where : {
            email
        }
     })
    // console.log(user)
 
     if(!user) throw new createHttpError.NotFound("Email not found");
 
     const isMatch = await bcrypt.compare(password, user.password)
 
     if(!isMatch) throw new createHttpError.Unauthorized("Password is wrong")
 
     return user;
 
     
    
 }

 export const registerUser = async(userData)=>{
  
         const {name, email, password} = userData;
 
     let user = await db.users.findFirst({
        where : {
            email
        }  });
//  console.log(user)
     if(user) throw new createHttpError.Conflict("User is already exist")
    
     
     const hashpassword= await bcrypt.hash(password,10);
     user = await db.users.create({
        data : {
            name, 
            email, 
            password:hashpassword
        }
    }
    )
    
     return user;
    
 }

 export const refreshToken=async (refresh_token,user_id)=>{
   const token = await db.refreshTokens.create({
       data : { 
        token: refresh_token,
        user_id: user_id,
        expiry: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        }
    });

        // return token;
 }