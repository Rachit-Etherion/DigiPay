import { getServerSession } from "next-auth";
import { SigninCard } from "../../components/signinCard";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function() {

    const session = await getServerSession(authOptions)
    if(session?.user) {
        redirect('/dashboard')
    }

    return<div>
        <SigninCard />
    </div>
} 