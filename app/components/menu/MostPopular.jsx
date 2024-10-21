import Link from "next/link";
import { formatDate } from "../../utils/formatedDate";

const MostPopular = ({title,cat,time,id,user}) => {

    return (
        <Link className="flex items-center" href={`/posts/${id}`}>
            <div className="flex flex-col gap-1 flex-[4]">
                <div className={`py-[3px] px-2 rounded-full text-xs text-black dark:text-darkTextColor bg-${cat} w-fit`}>{cat}</div>
                <h3 className="text-lg font-medium text-softTextColor dark:text-darkSoftTextColor leading-6">{title}</h3>
                <div className="text-xs">
                    <span>{formatDate(time)} - </span>
                    <span className="text-[gray]">{user.name}</span>
                </div>
            </div>
        </Link>
    );
};

export default MostPopular;
