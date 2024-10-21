import Image from "next/image";

const Featured = () => {
    return (
        <section className="mt-8 font-light">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl"><b className="font-bold">Hey, omar dev here!</b>  Discover my stories and creative ideas.</h1>
            <div className="mt-16 flex items-center gap-12">
                <div className="relative h-[500px] flex-1 hidden md:block">
                    <Image className="object-cover" src='/p1.jpeg' alt='featured image' fill/>
                </div>
                <div className="flex flex-col items-start gap-5 flex-1">
                    <h1 className="text-2xl sm:text-4xl font-bold">Unleashing Creativity Across Every Corner.</h1>
                    <p className="text-lg sm:text-xl text-softTextColor dark:text-darkSoftTextColor"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        From the latest trends in fashion to coding tips and travel adventures, dive into a blend of styles, culture, and creativity that inspire every day.
                    </p>
                    <button className="py-4 px-5 rounded-md font-semibold hover:shadow-md transition duration-300 bg-softBg text-textColor dark:bg-darkTextColor dark:text-textColor">Read More</button>
                </div>
            </div>
        </section>
    );
}

export default Featured;
