import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "./firebase";
import { toast } from "sonner";

export const addPost = async (data) => {
    try {
        await addDoc(collection(db, 'posts'), {
            title: data.title,
            desc : data.desc,
            cat: data.cat,
            imageUrl: data.image,
            createdAt: Timestamp.now(),
            views : 0,
            user: {
                name: data.user.name,
                userImg: data.user.image,
                userEmail: data.user.email
            }
        });
        toast.success("Post Successfully Added!");
    } catch (error) {
        toast.error(error)
    }
};
