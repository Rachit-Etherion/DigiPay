"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { createOnrampTransaction } from "../app/lib/action/createOnrampTransaction";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];

export const AddMoneyCard = () => {
    const [redirectingUrl, setRedirectingUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [amount, setamount] = useState(0);
    const [provider, setprovider] = useState(SUPPORTED_BANKS[0]?.name || "");
    
    return (
        <Card title="Add Money">
            <div className=" w-full">
                <TextInput label="Amount" placeholder="Amount" onChange={(value) => {
                    setamount(Number(value))
                }} />
                <div className=" py-4 text-left">
                    Bank
                </div>
                <Select onSelect={(value) => {
                    setRedirectingUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
                    setprovider(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
                }} options={SUPPORTED_BANKS.map(x => ({
                    key: x.name,
                    value: x.name
                }))}/>
                <div className=" flex justify-center pt-4">
                <Button onClick={async () => {
                        await createOnrampTransaction(amount * 100,provider)
                        window.location.href = redirectingUrl || "";
                    }}>
                    Add Money
                    </Button>
                </div>
            </div>
        </Card>

    );
}