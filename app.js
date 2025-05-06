import express from "express";
import routes from "./routes/index.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.middlewares.js";
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
app.use(routes)

app.get("/",(req,res)=>{
    res.send("Nice working")
});


app.use(errorMiddleware)


