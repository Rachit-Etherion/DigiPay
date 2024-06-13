import { getServerSession } from "next-auth";
import {AddMoneyCard} from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { OnRampTransactions } from "../../../components/OnRampTransactions";

async function  getBalance() {

    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
    
}

async function getOnRamoTransactions() {

    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });

    return txns.map(t => ({
        time: t.startTime,
        amount: t.amoun,
        status: t.status,
        provider: t.provider
    }))
    
}

export default async function() {
    const balance = await getBalance();
    const transactions = await getOnRamoTransactions();

    return <div className=" w-screen">
        <div className=" text-4xl text-[#6a51a6] pt-8 mb-b fint-bold">
            Transfer
        </div>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <AddMoneyCard />
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div>
                    <OnRampTransactions transactions={transactions} />
                </div>
            </div>
        </div>
    </div>
}