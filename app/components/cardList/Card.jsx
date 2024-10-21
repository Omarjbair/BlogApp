import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../utils/formatedDate";

const Card = ({id,title,desc,img,cat,time}) => {

    return (
        <div className="mb-12 flex gap-12">
        {img &&
            <div className="relative h-[350px] flex-1 hidden xl:block">
                <Image className="object-cover" src={img} alt="" fill/>
            </div>
        }
            <div className="flex flex-col gap-8 flex-1">
                <div>
                    <span className="text-gray-500">{formatDate(time)} - </span>
                    <span className="text-[crimson] font-medium uppercase">{cat}</span>
                </div>
                <Link href={`/posts/${id}`}>
                    <h1 className="text-3xl font-bold hover:underline">{title}</h1>
                </Link>
                <p className="text-lg font-light text-softTextColor dark:text-darkSoftTextColor leading-5" dangerouslySetInnerHTML={{ __html: desc.substring(0,60) }}></p>
                <Link className="underline" href={`/posts/${id}`}>Read More</Link>
            </div>
        </div>
    );
};

export default Card;
