
import {  sendCookies } from "../utils/features.utils.js";
import { loginCheck, registerUser } from "../services/user.service.js";


export const getAllUsers= async(req,res)=>{
}

export const login = async(req,res,next) => {
   try {
    const validData = req.body;

    let user = await loginCheck(validData);
    // console.log(user)
    sendCookies(user,res,`Welcome Back, ${user.name}`, 200)

    
   } catch (error) {
    next(error)
   }
}

export const register = async(req,res, next)=>{
    try {
        const userData = req.body;

        let user =await registerUser(userData);
        // console.log(user)
    sendCookies(user,res, "Registered Successfully", 201);
    } catch (error) {
        next(error)
    }
}

export const getMyProfile = (req,res)=>{

    res.status(200).json({
        status : true,
        user : req.user
    });
}

export const logout = (req,res)=>{
    res.status(200)
    .cookie("token","",{
        expires :new Date(Date.now()),
        sameSite : process.env.NODE_ENV === 'Development' ? 'lax' : none,
        secure : process.env.NODE_ENV === 'Development' ? false : true,
    })
    .cookie("refresh_token","",{
        expires :new Date(Date.now()),
        sameSite : process.env.NODE_ENV === 'Development' ? 'lax' : none,
        secure : process.env.NODE_ENV === 'Development' ? false : true,
    })
    .json({
        status : true,
        user : req.user
    });
}



// export const updateUser = async (req, res) => {
//     try {
//       const { id } = req.params;
    
//       const user = await User.findById(id);
  
//       if (!user) {
//         return res.status(404).json({
//           success: false,
//           message: 'User not found'
//         });
//       }
  
//       // Update fields (you can expand this as needed)
//       user.name = req.body.name || user.name;
//       // Add more fields here if needed, e.g. user.email = req.body.email;
  
//       await user.save();
  
//       res.json({
//         success: true,
//         message: 'Updated successfully',
//         data: user // optional: send updated user
//       });
  
//     } catch (error) {
//       console.error("Update User Error:", error);
//       res.status(500).json({
//         success: false,
//         message: 'Server error'
//       });
//     }
//   };

// export const deleteUser = async (req, res) => {
//     try {
//       const { id } = req.params;
  
//       const user = await User.findById(id);
//       if (!user) {
//         return res.status(404).json({
//           success: false,
//           message: 'User not found'
//         });
//       }
  
//       await user.deleteOne(); // this deletes the document
  
//       res.json({
//         success: true,
//         message: 'Deleted successfully'
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         success: false,
//         message: 'Server error'
//       });
//     }
//   };