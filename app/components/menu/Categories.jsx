import Link from "next/link";

const Categories = () => {
    return (
        <div className="flex flex-wrap mt-9 mb-14 gap-5">
            <Link className="capitalize py-[10px] px-6 rounded-xl text-sm bg-style" href='/blog/?cat=style'>styles</Link>
            <Link className="capitalize py-[10px] px-6 rounded-xl text-sm bg-fashion" href='/blog/?cat=fashion'>fashion</Link>
            <Link className="capitalize py-[10px] px-6 rounded-xl text-sm bg-food" href='/blog/?cat=food'>food</Link>
            <Link className="capitalize py-[10px] px-6 rounded-xl text-sm bg-travel" href='/blog/?cat=travel'>travel</Link>
            <Link className="capitalize py-[10px] px-6 rounded-xl text-sm bg-culture" href='/blog/?cat=culture'>culture</Link>
            <Link className="capitalize py-[10px] px-6 rounded-xl text-sm bg-coding" href='/blog/?cat=coding'>coding</Link>
        </div>
    );
};

export default Categories;
