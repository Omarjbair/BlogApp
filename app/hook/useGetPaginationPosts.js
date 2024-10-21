"use client";

import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs, startAfter, startAt, where } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { toast } from 'sonner';

const PAGE_SIZE = 4;

const useGetPaginationPosts = (selectedCategory = null) => {
    const [posts, setPosts] = useState([]);
    const [lastPost, setLastPost] = useState(null);  
    const [loading, setLoading] = useState(false);
    const [prevPages, setPrevPages] = useState([]);  
    const [hasNext, setHasNext] = useState(true);   
    const [hasPrev, setHasPrev] = useState(0);  

    const fetchPosts = async (start = null, direction = 'next') => {
        setLoading(true);
        let q;
        if (selectedCategory) {
            q = query(
                collection(db, 'posts'),
                where('cat', '==', selectedCategory),
                orderBy('createdAt','desc'),
                ...(start ? (direction === 'next' ? [startAfter(start)] : [startAt(start)]) : []),
                limit(PAGE_SIZE)
            );
        } else {
            q = query(
                collection(db, 'posts'),
                orderBy('createdAt','desc'),
                ...(start ? (direction === 'next' ? [startAfter(start)] : [startAt(start)]) : []),
                limit(PAGE_SIZE)
            );
        }
        const postSnapshots = await getDocs(q);
        const newPosts = postSnapshots.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        const firstVisible = postSnapshots.docs[0];
        const lastVisible = postSnapshots.docs[postSnapshots.docs.length - 1];

        if (newPosts.length > 0) {
            setPosts(newPosts);
            setLastPost(lastVisible);
            if (direction === 'next') {
                setPrevPages((prev) => [...prev, firstVisible]); 
            } else if (direction === 'prev') {
                setPrevPages((prev) => prev.slice(0, prev.length - 1));
            }
        }
        await checkIfHasNext(lastVisible);
        setLoading(false);
    };

    const checkIfHasNext = async (lastPost) => {
        if (!lastPost) {
            setHasNext(false);
            return;
        }
        let nextQuery;
        try {
            if(selectedCategory){
                nextQuery = query(
                    collection(db, 'posts'),
                    orderBy('createdAt', 'desc'),
                    where('cat', '==', selectedCategory),
                    startAfter(lastPost), 
                    limit(1));
            }else{
                nextQuery = query(
                    collection(db, 'posts'),
                    orderBy('createdAt', 'desc'),
                    startAfter(lastPost), 
                    limit(1));
            }      
            const nextSnapshot = await getDocs(nextQuery);
            setHasNext(!nextSnapshot.empty);
        } catch (error) {
            toast.error(error);
            setHasNext(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {   
        setPosts([]);
        setLastPost(null);
        setPrevPages([]);
        setHasPrev(0);
        setHasNext(false);
        fetchPosts();
        
    }, [selectedCategory]);

    const handleNext = () => {
        if (lastPost) {
            fetchPosts(lastPost, 'next');
            setHasPrev(hasPrev + 1);
        }
    };
    
    const handlePrev = () => {
        const prevFirstPost = prevPages[prevPages.length - 2];
        if (prevFirstPost) {
            fetchPosts(prevFirstPost, 'prev');
            setHasPrev(hasPrev - 1);
        }
    };
    
    return {posts,hasNext,hasPrev,loading,handleNext,handlePrev}
}


export default useGetPaginationPosts;
