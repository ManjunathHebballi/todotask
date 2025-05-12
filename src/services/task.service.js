import db from "../config/db.js"

export const create_task=  async (taskData,user)=>{
    // console.log(user)
    const task=await db.tasks.create({
        data : {
            title : taskData.title,
            description : taskData.description,
            user_id : user.id
        }
    })
    return task;
}

export const my_task=async(userId)=>{
    const task= await db.tasks.findFirst({
        where : {
            user_id : userId
        }
    })
    return task;
}

export const update_task=async(userId)=>{

    const task = await db.tasks.findUnique({
        where: { id :userId }
      });

      if (!task) throw new ErrorHandler("Id not found", 404);

    const updateTask=await db.tasks.update({
        where : {
            id : userId
        },
        data : {
            is_completed : !task.is_completed
        }
    })
    return updateTask;
}

export const delete_task =  async (id)=>{
    const task = await db.tasks.delete({
        where : {
            id
        }
    })
    return task;
}