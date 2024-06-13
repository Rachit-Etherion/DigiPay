"use client"
import { Center } from "@repo/ui/center"
import { TextInput } from "@repo/ui/textinput"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useRef, useState } from "react"
import { PasswordButton } from "./button/PasswordButton"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { signupValidation } from "../schemas/zodSchemas"

export function SignupCard() {

    const router = useRouter();
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const handleSubmit = async (e?: React.FormEvent<HTMLButtonElement>) => {
        if(e) {
            e.preventDefault();
        }

        try {
            const validate = signupValidation.safeParse({
                name,
                email,
                phone: number,
                password
            })

            if(!validate.success) {
                const err = validate.error?.format()
                if(err.name) { toast.error("Invalid name") }
                else if(err.phone) { toast.error("Invalid Phone number") }
                else if(err.email) { toast.error("Invalid email") }
                else { toast.error("Invalid password") }
            } else {

                const response = await axios.post("/api/signup", {
                    email,
                    password,
                    name,
                    number
                })

                console.log(response.data.message)

                if(!response.data.success) {
                    toast.error(response.data.message)
                    return
                }
                
                toast.success(response.data.message);
                router.push("/dashboard")
            }
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    }
    return<div className=" h-[90vh]">
        <Center>
            <div className="border p-6 bg-white rounded-xl bg-[#ededed] w-72 lg:w-80">
                <h1 className="flex justify-center text-xl border-b pb-2">
                    SignUp
                </h1>
                <div>
                    <TextInput placeholder="Chandu" label="Name" onChange={(value) => {
                        setName(value)
                    }}/>
                    <TextInput placeholder="9999999999" label="Phone Number" onChange={(value) => {
                        setNumber(value)
                    }}/>
                    <TextInput placeholder="chandu@gmail.com" label="Email" onChange={(value) => {
                        setEmail(value)
                    }}/>
                    <PasswordButton onChange={(value) => {
                        setPassword(value)
                    }} />
                    <button type="button" onClick={handleSubmit} className=" mt-2 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SignUp</button>
                    <button type="button" onClick={() =>{
                        // router.push("/signin")
                        signIn()
                    }} className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SignIn</button>
                </div>
            </div>
        </Center>
        <Toaster
            position="bottom-right"
            reverseOrder={false}
        />
    </div>
} 

