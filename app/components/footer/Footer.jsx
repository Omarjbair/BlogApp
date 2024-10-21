import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-16 mb-6 flex flex-col gap-12 md:flex-row justify-between items-center text-darkSoftTextColor dark:text-darkSoftTextColor">
            <div className="flex flex-col gap-8 flex-1">
                <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="logo img" width={50} height={50}/>
                    <h1 className="text-2xl text-textColor dark:text-darkTextColor">Omarblog</h1>
                </div>
                <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate quibusdam, consectetur aperiam repellendus mollitia nemo assumenda molestiae beatae quas molestias optio magni nam error rerum odit dolorem veniam consequatur laborum, enim et commodi tenetur amet pariatur. Vero, eveniet dolores.</p>
                <div className="flex gap-3 mb-0 md:mb-6 ">
                    <Image src='/facebook.png' alt="facebook icon" width={18} height={18}/>
                    <Image src='/instagram.png' alt="instagram icon" width={18} height={18}/>
                    <Image src='/linkedin.png' alt="linkedin icon" width={18} height={18}/>
                    <Image src='/github.png' alt="github icon" width={18} height={18}/>
                </div>
            </div>
            <div className="flex justify-between w-full md:justify-end gap-10 xl:gap-24 flex-1">
                <div className="flex items-start flex-col gap-4 font-light max-sm:text-sm">
                    <div className="text-textColor dark:text-darkTextColor font-bold">Links</div>
                    <Link href='/'>Home</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/'>About</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
                <div className="flex items-start flex-col gap-4 font-light max-sm:text-sm">
                    <div className="text-textColor dark:text-darkTextColor font-bold">Tags</div>
                    <Link href='/blog?cat=style'>Style</Link>
                    <Link href='/blog?cat=fashion'>Fashion</Link>
                    <Link href='/blog?cat=coding'>Coding</Link>
                    <Link href='/blog?cat=travel'>Travel</Link>
                </div>
                <div className="flex items-start flex-col gap-4 font-light max-sm:text-sm">
                    <div className="text-textColor dark:text-darkTextColor font-bold">Social</div>
                    <a href='https://www.facebook.com/omar.jbair/' target="_blank">Facebook</a>
                    <a href='https://www.instagram.com/omarjbair/' target="_blank">Instagram</a>
                    <a href='https://www.linkedin.com/in/omarjbair/' target="_blank">Linkedin</a>
                    <a href='https://github.com/Omarjbair' target="_blank">Github</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
