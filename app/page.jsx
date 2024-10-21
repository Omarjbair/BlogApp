import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
      <main>
        <Featured/>
        <CategoryList/>
        <div className="flex gap-12">
          <CardList/>
          <Menu/>
        </div>
      </main>
  );
}
