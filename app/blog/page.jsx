import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";

const Blog = ({searchParams}) => {
    const {cat} = searchParams;

    return (
        <main>
            {cat &&
                <h1 className={`bg-${cat} text-center py-2 text-3xl text-black dark:text-darkTextColor font-bold`}>{cat} blogs</h1>
            }
            <div className="flex gap-12">
                <CardList cat={cat}/>
                <Menu/>
            </div>
        </main>
    );
};

export default Blog;
