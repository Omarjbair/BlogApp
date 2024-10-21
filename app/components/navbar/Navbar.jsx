import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

const Navbar = () => {
    return (
        <nav className="flex justify-between md:grid grid-cols-2 lg:grid-cols-3 h-24 place-content-center items-center">
            <div className="hidden lg:flex gap-2 justify-start ">
                <a href="https://www.facebook.com/omar.jbair/" target="_blank">
                    <Image src='/facebook.png' alt="facebook icon" width={24} height={24}/>
                </a>
                <a href="https://www.instagram.com/omarjbair/" target="_blank">
                    <Image src='/instagram.png' alt="instagram icon" width={24} height={24}/>
                </a>
                <a href="https://www.linkedin.com/in/omarjbair/" target="_blank">
                    <Image src='/linkedin.png' alt="linkedin icon" width={24} height={24}/>
                </a>
                <a href="https://github.com/Omarjbair" target="_blank">
                    <Image src='/github.png' alt="github icon" width={24} height={24}/>
                </a>
            </div>
            <Link href='/'>
                <h1 className="text-start lg:text-center text-3xl xl:text-4xl font-bold mb-2">Omarblog</h1>
            </Link>
            <div className="flex justify-end items-center gap-3 xl:gap-4  font-semibold ">
                <ThemeToggle/>
                <Link className='cursor-pointer hidden sm:block hover:tracking-wider duration-300 transition-all' href='/'>Home</Link>
                <Link className='cursor-pointer hidden sm:block hover:tracking-wider duration-300 transition-all' href='/contact'>Contact</Link>
                <Link className='cursor-pointer hidden sm:block hover:tracking-wider duration-300 transition-all' href='/'>About</Link>
                <AuthLinks/>
            </div>
        </nav>
    );
};

export default Navbar;
