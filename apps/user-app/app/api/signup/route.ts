import { NextResponse } from "next/server"
import { signupValidation } from "../../../schemas/zodSchemas"
import bcrypt from "bcrypt"
import db from "@repo/db/client"


export async function POST(req:Request) {

    const {number, email, password, name } = await req.json()
    try {

        const validate = signupValidation.safeParse({
            name,
            email,
            phone: number,
            password
        })

        if(!validate.success) {
            return Response.json({
                success: false,
                message: "Wrong Credentials"
            },{status: 203})
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const existingUser = await db.user.findFirst({
                where: {
                    number: number
                }
            });
            console.log(existingUser)

            if(existingUser) {
                console.log("4")
                return NextResponse.json({
                    success: false,
                    message: "User already exist"
                },{status: 203})
            }

            await db.$transaction(async(tx) => {
                const tempUser = await tx.user.create({
                    data: {
                        number: number,
                        password: hashedPassword,
                        name: name,
                        email: email
                    }
                })

                await tx.balance.create({
                    data: {
                        userId: tempUser.id,
                        amount: 0,
                        locked: 0
                    }
                })

            })
        }
    } catch (error) {
        return Response.json({
            success: false,
            message: "Internal server error"
        },{status: 500})
        
    }

    return Response.json({
        success: true,
        message: "Registration done successfully"
    },{status: 200} )
    
}