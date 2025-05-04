import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask= async(req,res, next)=>{
    try {
        const { title,description} = req.body;
        const task = await Task.create({title , description, user:req.user})
        res.status(201).json({
            status : true,
            message : "Task Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}


export const myTask= async(req, res, next) => {
    try {
        const userid= req.user._id
        const task = await Task.find({user : userid})
        // console.log(task)
        res.status(200).json({
            status : true,
            task
        }) 
    } catch (error) {
        next(error)
    }
}

export const updateTask= async(req,res,next)=>{
try {
    const {id}=req.params
    const task = await Task.findById(id)
    if(!task) return next(new ErrorHandler("Id not found",404))
    task.is_completed= !task.is_completed;
    await task.save();
    res.status(200).json({
        status : true,
        message:"Task updated!"
    })
} catch (error) {
        next(error)
}
}

export const deleteTask=async(req,res,next)=>{
try {
    const task = await Task.findById(req.params.id)
    if(!task) return next(new ErrorHandler("Id not found",404))
    await task.deleteOne();
    res.status(200).json({
        status : true,
        message:"Task Deleted!"
    })
} catch (error) {
    next(error)
}
}