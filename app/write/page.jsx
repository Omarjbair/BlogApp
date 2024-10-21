"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react";
import { addPost } from '../utils/addPost';
import Loading from '../components/loading/Loading';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../utils/firebase';
import { toast } from 'sonner';

const WritePage = () => {
    const [open,setOpen] = useState(false);
    const [value,setValue] = useState("");
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("style");
    const [imageURL, setImageURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [loading,setLoading] = useState(false);
    const {status,data} = useSession()
    const router = useRouter();
    const uploadImage = async (file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        return new Promise((resolve, reject) => {
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                },
                (error) => {
                    toast.error(error);
                    reject(error);
                },
                () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageURL(downloadURL);
                        resolve(downloadURL); 
                    }).catch((error) => {
                        reject(error);
                    });
                }
            );
        });
    };
    
    useEffect(() => {
        const upload = async () => {
            if (!file) return;
            setLoading(true);
            try {
                await uploadImage(file);
                toast.success("Image uploaded successfully");
            } catch (error) {
                toast.error("Error uploading image try again");
            } finally {
                setLoading(false);
            }
        }
        upload();
    },[file]);

    const handlePublish = async () => {
        const fromData = {
            title,
            desc: value,
            cat: catSlug,
            image : imageURL,
            user: {
                name: data?.user?.name,
                image: data?.user?.image,
                email: data?.user?.email
            }
        }
        
        if(title && value){
            setLoading(true);
            try{
                await addPost(fromData);
            }catch (error){
                toast.error('error in adding post, please try again');
            } finally {
                setLoading(false);
                router.push('/');
            }
        }
        else{
            toast.error("fill the field to add the post")
        }
    }

    if(status === 'loading')
        return (<Loading/>)

    if(status === 'unauthenticated')
        router.push('/')

    return (
        <main className='relative flex flex-col gap-5 w-full'>
            <input onChange={(e) => setTitle(e.target.value)} className='bg-transparent outline-none border-none text-2xl md:text-6xl p-6  md:p-12 placeholder:text-[#b3b3b1] w-[80%] md:w-[85%]' type="text" placeholder="Title"/>
            <select className='mb-12 py-2 px-5 ml-6 md:ml-12 w-fit bg-softBg dark:bg-darkSoftBg rounded-md outline-none' onChange={(e) => setCatSlug(e.target.value)}>
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
            <div className='ml-6 md:ml-12 relative flex flex-col  h-[500px]'>
                <button className='flex justify-center items-center w-9 h-9 rounded-full bg-transparent border border-solid border-textColor dark:border-darkTextColor' onClick={() => setOpen(!open)}>
                    <Image src='/plus.png' alt='' width={16} height={16} />
                </button>
                {open && 
                    <div className='flex gap-5 absolute left-14 z-40 bg-bgColor dark:bg-darkBgColor'>
                    <input className='hidden' type="file" id="image" onChange={(e) => setFile(e.target.files[0])}  accept="image/*" />
                        <button className='flex justify-center items-center w-9 h-9 rounded-full bg-transparent border border-solid border-[#1a8917] '>
                            <label htmlFor="image">
                                <Image className="cursor-pointer" src="/image.png" alt="" width={16} height={16} />
                            </label>
                        </button>
                    </div>
                }
                <div className='mt-12 w-full'>
                    <ReactQuill  theme='bubble' value={value} onChange={setValue} placeholder='Tell your story ...'/>
                </div>
            </div>
            <button disabled={(progress !== 100 && file) || loading} onClick={handlePublish} className='absolute w-fit h-fit right-0 top-5 md:top-16  bg-[#1a8917] disabled:bg-[#1b8917ac] text-white border-none px-5 py-2 rounded-[20px] active:shadow-lg active:bg-[#1b8917ac] duration-200 transition-all'>Publish</button>
        </main>
    );
};

export default WritePage;
