import Image from 'next/image';
import React from 'react'
import { formatDate } from '../../utils/formatedDate';

const Comment = ({user,time,comment}) => {
    return (
        <div className="mb-12">
            <div className="flex items-center gap-5 mb-5">
                {user.image &&
                    <Image className="rounded-full w-[50px] h-[50px]" src={user.image} alt="user img" width={50} height={50}/>
                }
                <div className="flex flex-col gap-1 text-softTextColor dark:text-darkSoftTextColor">
                    <span className="font-bold">{user.name}</span>
                    <span className="text-sm">{formatDate(time)}</span> 
                </div>
            </div>
            <p className="text-sm sm:text-lg font-light">{comment}</p>
        </div>
    );
};

export default Comment;
