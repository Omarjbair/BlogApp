import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "sonner";
import { db } from "./firebase";

export const addComment = async (data) => {
    try {
        await addDoc(collection(db, 'comments', data.id, 'comment'), {
                comment: data.comment,
                user: data.user,
                createdAt: Timestamp.now()
            }
        );
        toast.success("comment added successfully")
    } catch (error) {
        console.log(error);
        toast.error("failed to add comment, try again");
    }
};