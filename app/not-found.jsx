import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex justify-center items-center text-4xl h-[380px]'>
            <div className='flex flex-col items-center gap-5'>
                <h1>404 - Page Not Found</h1>
                <Link className="underline" href="/" >
                    Go back home
                </Link>
            </div>
        </div>
    );
};