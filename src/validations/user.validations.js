import {z} from "zod"

export const createUserSchema=z.object({
    name : z.string().min(3).trim().toUpperCase(),
    email : z.string().email().trim(),
    password : z.string().min(8).trim()
})


export const loginUserSchema=z.object({
    email : z.string().email().trim(),
    password : z.string().min(4).trim()
})