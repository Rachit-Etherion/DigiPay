"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";


export async function p2pTransfer (to: string, amount: number) {

    const session = await getServerSession(authOptions);
    const from = session.user.id;
    if(!from) {
        return {
            success: false,
            message: "Error Occure"
        }
    }

    const toUser = await prisma.user.findFirst({
        where: {
            number: to
        }
    });

    if(!toUser) {
        return {
            success: false,
            message: "Wrong number"
        }
    }

    try {
        await prisma.$transaction(async(tx) =>{
            await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
            const fromBalance = await tx.balance.findUnique({
                where: {
                    userId: Number(from)
                }
            });
            if(!fromBalance || fromBalance.amount < amount) {
                throw new Error('Insufficient funds');
            }
    
            await tx.balance.update({
                where: { userId: Number(from) },
                data: {amount: { decrement: amount}},
            });
    
            await tx.balance.update({
                where: { userId: Number(toUser.id) },
                data: {amount: { increment: amount}},
            });
    
            await tx.p2pTransfer.create({
                data: {
                    fromUserId: Number(from),
                    toUserId: toUser.id,
                    amount,
                    timestamp: new Date()
                }
            })
    
        });
    } catch (error: unknown) {
        if(error instanceof Error) {
            return {
                success: false,
                message: error.message
            }
        }
        return {
            success: false,
            message: "Internal server Error"
        }
        
    }

    return {
        success: true,
        message: "Money Sent successfully"
    }

    
} 