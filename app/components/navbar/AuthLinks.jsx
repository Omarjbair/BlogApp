"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { useState } from "react";

const AuthLinks = () => {
    const {status} = useSession();
    const [open,setOpen] = useState(false)
    return (
        <>
            {status === "unauthenticated"? 
                (<Link className='cursor-pointer hidden sm:block hover:tracking-wider duration-300 transition-all' href='/login'>Login</Link>):
                <>
                    <Link className='cursor-pointer hidden sm:block hover:tracking-wider duration-300 transition-all' href='/write'>Write</Link>
                    <div className="cursor-pointer hidden sm:block hover:tracking-wider duration-300 transition-all" onClick={signOut}>Logout</div>
                </>
            }
            <div onClick={() => setOpen(!open)} className="w-5 h-4 flex sm:hidden flex-col justify-between items-center">
                <div className="w-full border border-black dark:border-darkTextColor border-solid"></div>
                <div className="w-full border border-black dark:border-darkTextColor border-solid"></div>
                <div className="w-full border border-black dark:border-darkTextColor border-solid"></div>
            </div> 
            <div style={{right: (open?'0':'-100%')}} className={`fixed flex flex-col w-[100vw] h-[100vh] justify-center items-center gap-6 font-semibold top-0  duration-200 transition-all ease-in-out bg-bgColor text-textColor dark:bg-darkBgColor dark:text-darkTextColor z-50`}>
                <div onClick={() => setOpen(!open)} className=" absolute top-6 right-2 ">
                    <svg className="w-[40px] h-[40px] text-textColor dark:text-darkTextColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <Link onClick={() => setOpen(!open)} className='cursor-pointer hover:tracking-wider duration-300 transition-all' href='/'>Home</Link>
                <Link onClick={() => setOpen(!open)} className='cursor-pointer hover:tracking-wider duration-300 transition-all' href='/contact'>Contact</Link>
                <Link onClick={() => setOpen(!open)} className='cursor-pointer hover:tracking-wider duration-300 transition-all' href='/'>About</Link>
                {status === "unauthenticated"? 
                    (<Link onClick={() => setOpen(!open)} className='cursor-pointer hover:tracking-wider duration-300 transition-all' href='/login'>Login</Link>):
                    <>
                        <Link onClick={() => setOpen(!open)} className='cursor-pointer hover:tracking-wider duration-300 transition-all' href='/write'>Write</Link>
                        <div className="cursor-pointer" onClick={signOut}>Logout</div>
                    </>
                }
            </div>
        </>
    );
};

export default AuthLinks;
