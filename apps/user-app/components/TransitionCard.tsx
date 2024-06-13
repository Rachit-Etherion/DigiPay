import { getServerSession } from "next-auth"
import { authOptions } from "../app/lib/auth"
import db from "@repo/db/client"
import { Card } from "@repo/ui/card";


function checkstatus(toUserid: number, id: number) {
    if(toUserid === Number(id)) { return true }
    return false;

}


async function getTransitions() {
    const session = await getServerSession(authOptions)
    const transitions = await db.p2pTransfer.findMany({
        where: {
            OR: [
                {
                    fromUserId: Number(session?.user.id)
                },
                {
                    toUserId: Number(session?.user.id)
                }
            ]
        },
        select: {
            id: true,
            amount: true,
            timestamp: true,
            toUser: {
                select: {
                    id: true,
                    number: true
                }
            },
            fromUser: {
                select: {
                    id: true,
                    number: true
                }
            }
        },
        orderBy: {
            timestamp: 'desc'
        }
    })
    return transitions.map(t => ({
        id: t.id,
        time: t.timestamp,
        amount: t.amount/100,
        checkid: session.user.id,
        toUser: t.toUser,
        fromUser: t.fromUser
    }))
}

export const TransitionsCard = async () => {
    const transitions = await getTransitions()
    return <div className=" ">
        <div className=" p-4">
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">
            History
            </button>
        </div>
        <Card title="Transitions History">
            <div className=" pt-2">
                {transitions.map(t => <div key={t.id} className=" flex justify-between pt-2">
                    <div className="">
                        <div className="">
                            {checkstatus(t.toUser.id,t.checkid)? `Recived from ${t.fromUser.number}`: `Send to ${t.toUser.number}`}
                        </div>
                        <div className=" text-slate-600 text-xs">
                            {t.time.toDateString()}
                        </div>
                    </div>
                    <div className="">
                        {checkstatus(t.toUser.id,t.checkid)? <div className=" text-green-400">
                            + RS {t.amount} 
                            </div>:<div className=" text-red-400">
                                - Rs {t.amount}
                                </div>}
                    </div>
                </div>)}
            </div>
        </Card>
    </div>
}