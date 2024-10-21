import Image from "next/image";
import Link from "next/link";


const CategoryList = () => {
    return (
        <section>
            <h1 className="my-12 font-bold text-3xl sm:text-4xl">Popular Categories</h1>
            <div className="flex flex-wrap justify-between gap-5">
                <Link className="flex justify-center items-center gap-2 capitalize w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-20 bg-style rounded-lg hover:shadow-sm transition duration-150" href='/blog?cat=style'>
                    <Image className="rounded-full w-8 h-8" src='/style.png' alt="style img" width={32} height={32}/>
                    style
                </Link>
                <Link className="flex justify-center items-center gap-2 capitalize w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-20 bg-fashion rounded-lg hover:shadow-sm transition duration-150" href='/blog?cat=fashion'>
                    <Image className="rounded-full w-8 h-8" src='/fashion.png' alt="fashion img" width={32} height={32}/>
                    fashion
                </Link>
                <Link className="flex justify-center items-center gap-2 capitalize w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-20 bg-food rounded-lg hover:shadow-sm transition duration-150" href='/blog?cat=food'>
                    <Image className="rounded-full w-8 h-8" src='/food.png' alt="food img" width={32} height={32}/>
                    food
                </Link>
                <Link className="flex justify-center items-center gap-2 capitalize w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-20 bg-travel rounded-lg hover:shadow-sm transition duration-150" href='/blog?cat=travel'>
                    <Image className="rounded-full w-8 h-8" src='/travel.png' alt="travel img" width={32} height={32}/>
                    travel
                </Link>
                <Link className="flex justify-center items-center gap-2 capitalize w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-20 bg-culture rounded-lg hover:shadow-sm transition duration-150" href='/blog?cat=culture'>
                    <Image className="rounded-full w-8 h-8" src='/culture.png' alt="culture img" width={32} height={32}/>
                    culture
                </Link>  
                <Link className="flex justify-center items-center gap-2 capitalize w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-20 bg-coding rounded-lg hover:shadow-sm transition duration-150" href='/blog?cat=coding'>
                    <Image className="rounded-full w-8 h-8" src='/coding.png' alt="coding img" width={32} height={32}/>
                    coding
                </Link>                                      
            </div>       
        </section>
    );
};

export default CategoryList;
