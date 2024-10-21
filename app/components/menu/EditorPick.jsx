
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../utils/formatedDate";

const EditorPick = ({id,img,userName,time,cat,title}) => {
    return (
        <Link className="flex items-center gap-5" href={`/posts/${id}`}>
            <div className="relative flex-1 aspect-square">
                <Image className="rounded-full object-cover border-[3px] border-[lightgray] border-solid" src={img} alt="" fill/>
            </div>
            <div className="flex flex-col gap-1 flex-[4]">
                <div className={`py-[3px] px-2 rounded-full text-xs text-textColor dark:text-darkTextColor bg-${cat} w-fit`}>{cat}</div>
                <h3 className="text-lg font-medium text-softTextColor dark:text-darkSoftTextColor leading-6">{title}</h3>
                <div className="text-xs">
                    <span>{userName}</span>
                    <span className="text-[gray]">{formatDate(time)}</span>
                </div>
            </div>
        </Link>
    );
}

export default EditorPick;
