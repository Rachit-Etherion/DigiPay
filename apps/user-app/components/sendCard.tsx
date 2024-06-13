"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/action/p2pTransfer";
import toast, { Toaster } from "react-hot-toast";



export function SendCard() {
    const [numbe, setnumber] = useState("")
    const [amount, setamount] = useState(0)

    return <div className=" h-[90vh]">
        <Center>
            <Card title="Send Money">
                <div className=" min-w-72 pt-2">
                    <TextInput placeholder="9999999999" label="Number" onChange={(value) => {
                        setnumber(value)
                    }} />
                    <TextInput placeholder="100000" label="Amount" onChange={(value) => {
                        setamount(Number(value))
                    }} />
                    <div className=" pt-4 flex justify-center">
                        <Button onClick={async () => {
                            const res = await p2pTransfer(numbe,amount * 100)
                            if(!res.success)
                            {
                                toast.error(res.message)
                            }
                            else{
                                toast.success(res.message)
                            }
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
        <Toaster
        position="bottom-right"
        reverseOrder={false}
        />
    </div>
}