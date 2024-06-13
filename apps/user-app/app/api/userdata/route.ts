import db from "@repo/db/client"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "../../lib/auth"

export const GET = async () => {

    const session = await getServerSession(authOptions);
    // console.log(id)
    
    try {
        // console.log("1")
        const user = await db.user.findFirst({
            where: {
                id:Number(session.user.id),
            },
            select: {
                name: true,
                email: true,
                number: true,
            }
        })
        const balance = await db.balance.findFirst({
            where: {
                userId:Number(session.user.id),
            },
            select: {
                amount: true,
                locked: true,
            }
        })
        // console.log(user)

        if(user) {
            return NextResponse.json({
                success: true,
                message: "Data fetch successfully",
                name: user.name,
                email: user.email,
                number: user.number,
                balance: balance?.amount,
                lockamount: balance?.locked,
            })
        }
        return NextResponse.json({
            success: false,
            message: "User not found"
        },{status: 101})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "Internal server Error",
        }, {status: 500})
    }
}