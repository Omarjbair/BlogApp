"use client";

import { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { toast } from 'sonner';

const useGetPickedByEditor = () => {
    const [pickedByEditor, setPickedByEditor] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPickedByEditor = async () => {
        setLoading(true);
        const q = query(collection(db, 'PickByEditor'));
        try {
            const postSnapshots = await getDocs(q);
            const allPosts = postSnapshots.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPickedByEditor(allPosts);
        } catch (error) {
            console.log(error);
            toast.error('Error fetching mostView posts reload the page');
        }
        setLoading(false);
    };

    
    useEffect(() => {
        fetchPickedByEditor();
    }, []);

    return {pickedByEditor ,loading}
};

export default useGetPickedByEditor
