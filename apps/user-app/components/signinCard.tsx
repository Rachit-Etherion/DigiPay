"use client"
import { Center } from "@repo/ui/center"
import { TextInput } from "@repo/ui/textinput"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useRef } from "react"
import toast, { Toaster } from "react-hot-toast"
import { z } from "zod"
import { PasswordButton } from "./button/PasswordButton"
import { signinValidation } from "../schemas/zodSchemas"



export function SigninCard() {

    const router = useRouter();

    const phone = useRef('');
    const password = useRef('');
    const handleSubmit = async (e?: React.FormEvent<HTMLButtonElement>) => {
        if(e) {
            e.preventDefault();
        }

        try {
            const validate = signinValidation.safeParse({
                phone: phone.current,
                password: password.current
            })

            console.log(validate.error?.format().phone?._errors)
            if(!validate.success) {
                const Phoneerr =  validate.error?.format().phone?._errors
                const passworderr =  validate.error?.format().password?._errors
                if(Phoneerr) { toast.error("Invalid Phone number") }
                else { toast.error("Invalid password") }
            }
            else {

                const res = await signIn("credentials", {
                    phone: phone.current,
                    password: password.current,
                    redirect: false
                });

                if(res?.ok) {
                    router.push("/");
                } else {
                    toast.error("Wrong Credentiald")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    return<div className=" h-[90vh]">
        <Center>
        <div className="border p-6 bg-white rounded-xl bg-[#ededed] w-72 lg:w-80">
            <h1 className="flex justify-center text-xl border-b pb-2">
                SignIn
            </h1>
            <div>
                <TextInput placeholder="9999999999" label="Phone Number" onChange={(value) => {
                    phone.current = value;
                }}/>
                <PasswordButton onChange={(value) => {
                    password.current = value
                }} />
                <button type="button" onClick={handleSubmit} className=" mt-2 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
                <button type="button" onClick={() =>{
                    router.push("/signup")
                }} className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SignUp</button>
            </div>
        </div>
        </Center>
        <Toaster
            position="bottom-right"
            reverseOrder={false}
        />
    </div>
} 