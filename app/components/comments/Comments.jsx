import Link from "next/link";
import Comment from "./Comment";
import { useSession } from "next-auth/react";
import { addComment } from "../../utils/addComments";
import { useState } from "react";
import { toast } from "sonner";
import { Timestamp } from "firebase/firestore";
import Loading from "../loading/Loading";

const Comments = ({comments,id,setComments}) => {
    const {status,data} = useSession()
    const [commentInput,setCommentInput] = useState("");
    const [loading,setLoading] = useState(false);
    
    const handleAddComment = async () => {
        const commentData = {
            id,
            comment: commentInput,
            user: data?.user,
            createdAt: Timestamp.now()
        }
        
        if(commentInput){
            setLoading(true);
            try{
                await addComment(commentData);
                setCommentInput("");
                setComments((prev) => [commentData,...prev]);
            } finally {
                setLoading(false);
            }
        }
        else{
            toast.error("fill the comment field")
        }
    }

    const commentsList = comments.map((comment) => (<Comment key={comment.id} user={comment.user} time={comment.createdAt} comment={comment.comment}/>))
    
    if(loading){
        return <Loading/>
    }
    

    return (
        <section className="mt-12">
            <h1 className="text-softTextColor dark:text-darkSoftTextColor mb-8 text-4xl font-bold">Comments</h1>
            {status === 'authenticated'? 
                (
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 ">
                        <textarea onChange={(e) => setCommentInput(e.target.value)} value={commentInput} className="p-5 w-full rounded-sm border-2 dark:border-none resize-none focus:outline-none dark:text-black placeholder:font-semibold" placeholder="write a comment ..."></textarea>
                        <button disabled={loading} onClick={handleAddComment} className="rounded-md py-4 px-5 bg-[teal] text-white font-bold w-full sm:w-fit focus:outline-none cursor-pointer active:shadow-xl duration-100 transition-all active:bg-[#008080cb] disabled:bg-[#008080cb]">send</button>
                    </div>
                ):
                (
                    <Link className="text-2xl font-bold duration-200 hover:underline" href="/login">Login to write a comment</Link>
                )
            }
            {!!(comments?.length) &&
                <div className="my-custom-scrollbar mt-12 h-[800px] overflow-y-scroll">
                    {commentsList}
                </div>
            }
        </section>
    )
}

export default Comments;
