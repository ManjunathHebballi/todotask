import { z } from "zod"

export const createTaskSchema = z.object({
    title : z.string().min(4).trim().toUpperCase(),
    description : z.string().trim().toUpperCase().optional()
})

export const myTaskSchema = z.object({
    id : z.string().trim().nonempty()
})