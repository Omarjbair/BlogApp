'use client';

import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const useGetMostViewed = () => {
    const [mostViewPost, setMostViewPost] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPostsSortedByViews = async () => {
        setLoading(true);
        const q = query(
            collection(db, 'posts'),
            orderBy('views', 'desc'),
            limit(3),
        );
        try {
            const postSnapshots = await getDocs(q);
            const allPosts = postSnapshots.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMostViewPost(allPosts);
        } catch (error) {
            toast.error('Error fetching mostView posts reload the page');
        }
        setLoading(false);
    };

    
    useEffect(() => {
        fetchPostsSortedByViews();
    }, []);

    return {mostViewPost ,loading}
};

export default useGetMostViewed;
