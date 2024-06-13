import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import axios from "axios";
import { HomePageCard } from "../components/HomePageCard";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if(session?.user) {
    redirect('/dashboard')
  }
  else {
    return<div className=" h-[90vh]">
      <HomePageCard />
    </div>
  }
}
