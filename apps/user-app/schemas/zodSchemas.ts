import { z } from "zod"

export const signupValidation = z.object({
    name: z.string().regex(/^[A-Za-z ]*$/).min(2),
    email: z.string().email(),
    phone: z.string().length(10).regex(/^\d+$/),
    password: z.string().min(4).max(16).regex(/^[a-zA-Z0-9@_]+$/)
})

export const signinValidation = z.object({
    phone: z.string().length(10).regex(/^\d+$/),
    password: z.string().min(4).max(16).regex(/^[a-zA-Z0-9@_]+$/)
}) 