"use client";

import Card from "./Card";
import useGetPaginationPosts from "../../hook/useGetPaginationPosts";
import Loading from "../loading/Loading";

const CardList = ({cat}) => {
    const {posts,hasNext,hasPrev,loading,handleNext,handlePrev} = useGetPaginationPosts(cat);

    if (loading) {
        return (<Loading classes={"flex-[5]"}/>)
    }

    if(posts.length === 0){
        return (<div className="flex-[5] text-5xl flex mt-16 justify-center">There is no posts yet!</div>)
    }

    const postList = posts.map((post) => (<Card key={post.id} id={post.id} title={post.title} desc={post.desc} img={post.imageUrl} user={post.user} cat={post.cat} time={post.createdAt}/>))
    return (
        <section className="flex-[5]">
            <h1 className="my-12 font-bold text-3xl sm:text-4xl">Recently added</h1>
            <div>
                {postList}
            </div>
            <div className="flex items-center justify-between">
                <button disabled={hasPrev === 0 || loading} onClick={handlePrev} className="w-[100px] p-4 bg-[crimson] text-white cursor-pointer disabled:bg-[rgba(220,20,60,0.437)] disabled:cursor-not-allowed">Previous</button>
                <button disabled={!hasNext || loading} onClick={handleNext} className="w-[100px] p-4 bg-[crimson] text-white cursor-pointer disabled:bg-[rgba(220,20,60,0.437)] disabled:cursor-not-allowed">Next</button>
            </div>
        </section>
    );
};

export default CardList
