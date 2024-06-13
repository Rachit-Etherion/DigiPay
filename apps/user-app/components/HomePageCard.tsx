"use client"
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image"


export const HomePageCard = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
          <Head>
            <title>Digital Wallet</title>
            <meta name="description" content="Easily transfer money from person to person with our digital wallet." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="flex flex-col items-center py-10 text-gray-800">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Digital Wallet</h1>
            <p className="text-lg text-center max-w-xl mb-8">
              Easily transfer money from person to person with our secure and user-friendly digital wallet.
            </p>
    
            <div className="relative w-80 h-80 mb-8 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src="/3517061.jpg" alt="Digital Wallet" layout="fill" objectFit="cover" />
            </div>
    
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300"
            onClick={handiler}>
              Get Started
            </button>
          </main>
        </div>
      );
    // return (
    //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
    //       <Head>
    //         <title>Digital Wallet</title>
    //         <meta name="description" content="Easily transfer money from person to person with our digital wallet." />
    //         <link rel="icon" href="/favicon.ico" />
    //       </Head>
    
    //       <main className="flex flex-col items-center py-10 text-white">
    //         <h1 className="text-5xl font-extrabold mb-4">Welcome to Digital Wallet</h1>
    //         <p className="text-lg text-center max-w-xl mb-8">
    //           Easily transfer money from person to person with our secure and user-friendly digital wallet.
    //         </p>
    
    //         <div className="relative w-80 h-80 mb-8 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    //           <Image src="/3517061.jpg" alt="Digital Wallet" layout="fill" objectFit="cover" />
    //         </div>
    
    //         <button className="px-8 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300">
    //           Get Started
    //         </button>
    //       </main>
    //     </div>
    //   );
}

const handiler = () => {
    signIn()
}