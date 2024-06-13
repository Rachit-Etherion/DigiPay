import { getServerSession } from "next-auth";
import { SignupCard } from "../../components/signupCard";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function() {
    
    const session = await getServerSession(authOptions)
    if(session?.user) {
        redirect('/dashboard')
    }

    return<div>
        <SignupCard />
    </div>
} 