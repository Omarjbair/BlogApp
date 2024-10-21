'use client';

import React from 'react'
import Menu from '../../components/menu/Menu';
import Image from 'next/image';
import Comments from '../../components/comments/Comments';
import useGetSinglePost from '../../hook/useGetSinglePosts';
import Loading from '../../components/loading/Loading';
import { formatDate } from '../../utils/formatedDate';

const SinglePage = ({params}) => {
    const {slug} = params;
    const {post,comments,setComments,loading} = useGetSinglePost(slug);

    if(loading)
        return <Loading classes={"flex-[5]"}/>

    return (
        <main>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <h1 className='text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mb-12 font-bold'>{post?.title}</h1>
                    <div className='flex items-center gap-5'>
                        {post?.user?.userImg &&
                            <div className='relative rounded-full w-12 h-12 overflow-hidden'>
                                <Image className="object-cover" src={post?.user?.userImg} alt="user img" fill />
                            </div>
                        }
                        <div className='flex flex-col gap-1 text-softTextColor dark:text-darkSoftTextColor'>
                            <span className='text-lg sm:text-[20px] font-medium'>{post?.user?.name}</span>
                            <span>{formatDate(post?.createdAt)}</span>
                        </div>
                    </div>
                </div>
                {post?.imageUrl && 
                    <div className='relative flex-1 h-[350px] hidden md:block'>
                        <Image className="object-cover" src={post?.imageUrl} alt="post img" fill/>
                    </div>
                }
            </div>
            <div className='flex  gap-12'>
                <div className='flex-[5] mt-16'>
                    <div className='desc' dangerouslySetInnerHTML={{ __html: post?.desc }}/>
                    <Comments comments={comments} setComments={setComments} id={slug}/>
                </div>
                <Menu/>
            </div>
        </main>
    );
}

export default SinglePage
