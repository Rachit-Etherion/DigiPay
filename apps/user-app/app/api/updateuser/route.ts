import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import db from "@repo/db/client"
import { z } from "zod"

const nameval  = z.string().min(2).regex(/^[A-Za-z ]*$/)
const emailval = z.string().email()

export async function POST(req:Request) {

    const session = await getServerSession(authOptions);
    const { name , email } = await req.json()
    const validname = nameval.safeParse(name);
    const valemail = emailval.safeParse(email);
    if(!valemail.success && !validname.success) {
        return Response.json({
            message: "Wrong Inputs",
            success:false
        })
    }

    try {
        if(!valemail.success && validname.success) {
            await db.user.update({
                where: {
                    id: Number(session.user.id),
                },
                data: {
                    name: name
                }
            })
            return Response.json({
                message: "name updated invalid email",
                success:true
            })
        }
        else if(valemail.success && !validname.success) {
            await db.user.update({
                where: {
                    id: Number(session.user.id),
                },
                data: {
                    email: email
                }
            })
            return Response.json({
                message: "email updated invalid name",
                success:true
            })
        }
        else {
            await db.user.update({
                where: {
                    id: Number(session.user.id),
                },
                data: {
                    name: name,
                    email: email
                }
            })
        }   
        
    } catch (error) {

        return Response.json({
            message: "Internal server Error",
            success: false
        })
        
    }
    return Response.json({
        message: "Updated Successfully",
        success: true
    })

}