"use client";

import { toast } from "sonner";
import Categories from "./Categories";
import EditorPick from "./EditorPick";
import MostPopular from "./MostPopular";
import useGetMostViewed from "../../hook/useGetMostViewed";
import useGetPickedByEditor from "../../hook/useGetPickedByEditor";
import Loading from "../loading/Loading";

const Menu = () => {
    const {mostViewPost,loading} = useGetMostViewed();
    const {pickedByEditor ,loading: loading2} = useGetPickedByEditor();
    const mostViewPostList = mostViewPost.map((post) => (<MostPopular key={post.id} id={post.id} user={post.user} cat={post.cat} title={post.title} time={post.createdAt} />))
    const pickedByEditorList = pickedByEditor.map((post) => (<EditorPick key={post.id} id={post.id} img={post.userImg} userName={post.user} cat={post.cat} title={post.title} time={post.createdAt} />))
    
    if(loading || loading2){
        return <Loading classes={"flex-[2] hidden lg:flex"}/>
    }

    return (
        <section className="flex-[2] mt-12 hidden lg:block">
            <h3 className="text-base text-[gray] font-normal">{"What's hot"}</h3>
            <h1 className="text-2xl font-bold">Most Popular</h1>
            <div className="flex flex-col gap-9 mt-9 mb-14">
                {mostViewPostList}
            </div>
            <h3 className="text-base text-[gray] font-normal">Discover by topic</h3>
            <h1 className="text-2xl font-bold">Categories</h1>
            <Categories/>
            <h3 className="text-base text-[gray] font-normal">Chosen by the editor</h3>
            <h1 className="text-2xl font-bold">{"Editor's Pick"}</h1>
            <div className="flex flex-col gap-9 mt-9 mb-14">
                {pickedByEditorList}
            </div>
        </section>
    );
}

export default Menu;
