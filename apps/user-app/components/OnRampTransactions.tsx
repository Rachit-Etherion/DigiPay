import { Card } from "@repo/ui/card";


export const OnRampTransactions = ({
    transactions
} : {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        status: string,
        provider: string
    }[]
}) => {
    if(!transactions.length) {
        return (<Card title="Recent Transaction">
            <div className=" text-center pb-8 pt-8">
                No Recent Teansaction
            </div>
        </Card>);
    }

    return (<Card title="Recent Transaction">
        <div className=" pt-2">
            {transactions.map(t => <div className=" flex justify-between">
                <div>
                    <div className="text-sm flex">
                        Received INR {statusCheck(t.status)}
                    </div>
                    <div className=" text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className=" flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>
            </div>)}
        </div>

    </Card>);
}

function statusCheck(status: string) {
    if(status == "Processing") {
        return <div className=" pl-2 flex justify-center flex-col"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg></div>
        
    }
    else {
        return <div className=" pl-2 lex justify-center flex-col"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg></div>
      
    }

}