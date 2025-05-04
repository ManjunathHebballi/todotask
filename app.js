import express from "express";
import userRoutes from "./routes/user.js"
import taskRoutes from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"

export const app = express();
config({
    path:"./data/config.env"
})
// Using Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : [process.env.FRONTEND_URL], //only get input from mentioned URL
    methods : ["GET","POST","PUT","DELETE"], // only allow this methods
    credentials:true //send credentials from backend to frontend 
}))

//Routes
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/tasks",taskRoutes)

app.get("/",(req,res)=>{
    res.send("Nice working")
});


app.use(errorMiddleware)


