import { useEffect, useState } from 'react';
import { collection, doc, getDoc, query, orderBy, getDocs, updateDoc, increment } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { toast } from 'sonner';

const useGetSinglePost = (postId) => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPost = async () => {
        setLoading(true);
        try {
            const postDoc = await getDoc(doc(db, 'posts', postId));
            if (postDoc.exists()) {
                setPost({ id: postDoc.id, ...postDoc.data() });
                fetchComments(postDoc.id);
                incrementPostViews(postDoc.id);
            } else {
                toast.error('No such post!');
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchComments = async (postId) => {
        const commentsQuery = query(
            collection(db, 'comments', postId, 'comment'),
            orderBy('createdAt','desc'),
        );
        
        const commentsSnapshot = await getDocs(commentsQuery);
        const commentsData = commentsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setComments(commentsData);
    };

    const incrementPostViews = async (postId) => {
        try {
            const postRef = doc(db, 'posts', postId); 
            await updateDoc(postRef, {
                views: increment(1),
            });
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
        if (postId) {
            fetchPost();
        }
    }, [postId]);
    
    return {post,comments,setComments,loading};
};

export default useGetSinglePost;
