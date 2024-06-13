"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import { Card } from "@repo/ui/card"
import toast, { Toaster } from "react-hot-toast"
import { redirect, useRouter } from "next/navigation"

export const DashboardCard = () => {

    const router = useRouter();

    const session = useSession()
    const [user, setUser] = useState({
        success: false,
        message: "Data can not be fetched",
        name: '',
        email: '',
        number: '',
        balance: '',
        lockamount: '',
    })
    const [editis, setEditis] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    useEffect(()=>{
        try {
            const fetchuserdata = async () =>{
                const response = await axios.get("/api/userdata")
                setUser(response.data);
                console.log(response.data)
            }
            fetchuserdata()
        } catch (error) {
            console.error("Error fetching user data:", error)
        }
    },[])

    return <Card title="Account Detailes">
        <div>
            {editis ? <div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Name:
                    </div>
                    <div>
                        {user.name}
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Email:
                    </div>
                    <div>
                        {user.email}
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Number:
                    </div>
                    <div>
                        {user.number}
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Balance:
                    </div>
                    <div>
                        {user.balance}
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Locked Amount:
                    </div>
                    <div>
                        {user.lockamount}
                    </div>
                </div>
                <div className=" flex justify-end text-xl p-2.5 ">
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 
                    onClick={()=>{
                        setEditis(false)
                    }}>
                        Edit
                    </button>
                </div>
            </div>
            :
            <div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Name:
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setName(e.target.value)
                        }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={user.name} required />
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Email:
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setEmail(e.target.value)
                        }} type="text" id="first_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={user.email} required />
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Number:
                    </div>
                    <div>
                        {user.number}
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Balance:
                    </div>
                    <div>
                        {user.balance}
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                        Locked Amount:
                    </div>
                    <div>
                        {user.lockamount}
                    </div>
                </div>
                <div className=" flex justify-between text-xl p-2.5 px-5">
                    <div>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 
                    onClick={()=>{
                        setEditis(true)
                    }}>
                        Cancel
                    </button>
                    </div>
                    <div>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 
                    onClick={async () => {
                        const res = await axios.post("/api/updateuser",{
                            name: name,
                            email: email
                        })

                        if(res.data.success)
                        {
                            toast.success(res.data.message)
                        }
                        else {
                            toast.error(res.data.message)
                        }
                        router.push("/")
                    }}>
                        Save
                    </button>
                    </div>
                </div>
            </div>}
        </div>
        <div>
        </div>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
    </Card>
}