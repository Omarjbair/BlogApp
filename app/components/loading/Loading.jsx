import React from 'react'

const Loading = ({classes}) => {
    return (
        <div className={`${classes} flex items-center h-[400px] justify-center`}>
            <div className="flex justify-center">
                <div className="flex flex-row gap-2">
                    <div className="w-4 h-4 rounded-full bg-textColor dark:bg-darkTextColor animate-bounce"></div>
                    <div className="w-4 h-4 rounded-full bg-textColor dark:bg-darkTextColor animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-textColor dark:bg-darkTextColor animate-bounce [animation-delay:-.5s]"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
