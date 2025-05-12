import { create_task, delete_task, my_task, update_task } from "../services/task.service.js";

import * as taskValidation from "../validations/task.validtaions.js";


export const newTask= async(req,res, next)=>{
    try {
        const task_data = await taskValidation.createTaskSchema.parseAsync(req.body);
        const task = await create_task(task_data,req.user)
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
        const userid= req.user.id
        const task = await my_task(userid)
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
    const {id}=await taskValidation.myTaskSchema.parseAsync(req.params)
    const task = await update_task(id)
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
    const {id}=await taskValidation.myTaskSchema.parseAsync(req.params)
    const task = await delete_task(id);
    res.status(200).json({
        status : true,
        message:"Task Deleted!"
    })
} catch (error) {
    next(error)
}
}