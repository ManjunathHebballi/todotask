import express from "express" 

import {  getAllUsers, getMyProfile, login, logout, register } from "../../controllers/user.controller.js";
import { isAuthenticated } from "../../middlewares/auth.middlewares.js";

const router = express.Router();

    router.get("/all", getAllUsers)

    router.post("/new", register);

    router.post("/login", login);

    router.get("/logout", logout);
    
    router.get("/profile",isAuthenticated, getMyProfile);
  
    
    

export default router;