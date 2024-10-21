"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import Loading from "../components/loading/Loading";

const LoginPage = () => {
    const {status} = useSession()
    const router = useRouter();

    if(status === 'loading')
        return <Loading/>

    if(status === 'authenticated')
        router.push('/')
    
    return (
        <main className="flex justify-center items-center mt-16">
            <div className="flex flex-col gap-12 bg-softBg dark:bg-darkSoftBg px-[50px] sm:px-[150px] md:px-[200px] py-[50px] md:py-[100px] rounded-xl">
                <div onClick={() => signIn("google")} className="cursor-pointer  p-5 rounded-md border-none text-white font-bold bg-[#ff5555] text-center max-sm:text-sm ">Sign in with Google</div>
                <div onClick={() => signIn("github")} className="cursor-pointer p-5 rounded-md border-none text-white font-bold bg-[#111] text-center max-sm:text-sm ">Sign in with Github</div>
            </div>
        </main>
    );
};

export default LoginPage;
