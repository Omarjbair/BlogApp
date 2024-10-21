'use client';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'sonner';

const Form = () => {
    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID , formRef.current, {publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY})
        .then(() => {
                toast.success('Email sent successfully');
            },(error) => {
                toast.error('Failed to sent');
            },
        );
        e.target.reset();
    };

    return (
        <form ref={formRef} onSubmit={sendEmail} className="flex justify-center items-center w-full my-10">
            <div className='flex flex-col w-[560px] gap-8'>
                <input className="bg-[transparent] h-[38px] text-cw text-[16px] py-6 px-[21px] border-[1px] border-solid border-border-color overflow-hidden rounded-[4px] focus:outline-none placeholder:text-[#6C757D]" name="from_name" type="text" required placeholder="Name"  autoComplete="off"/>
                <input className="bg-[transparent] h-[38px] text-cw text-[16px] py-6 px-[21px] border-[1px] border-solid border-border-color overflow-hidden rounded-[4px] focus:outline-none placeholder:text-[#6C757D]" name="from_email" type="email" required placeholder="Email"  autoComplete="off"/>
                <textarea className="bg-[transparent] h-auto text-cw text-[16px] py-6 px-[21px] border-[1px] border-solid border-border-color overflow-hidden rounded-[4px] focus:outline-none placeholder:text-[#6C757D]" name="message" type="text" required placeholder="Message" autoComplete="off"/>
                <input className="mouseHoverEffect mx-auto bg-softBg dark:bg-darkSoftBg cursor-pointer text-[15px] text-backgroundColor rounded-[5px] bg-cw border-none py-4 px-10 w-[35%] max-sm:w-[200px] duration-300 hover:bg-[#cacaca] dark:hover:bg-[#1f273ac1] hover:" type="submit" value={"Send Message"}/>
            </div>
        </form>
    );
};

export default Form;