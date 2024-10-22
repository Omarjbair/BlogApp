import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Inter } from 'next/font/google';
import { ThemeContextProvider } from "./context/ThemeContext";
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'sonner';
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omar Blog",
  description: "The Best Blog app!",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-[100vw] h-[100vh] relative overflow-x-hidden`}>
          <AuthProvider>
            <ThemeContextProvider>
              <NextTopLoader color="crimson" height={3} showSpinner={false}/>
              <Toaster position="top-left" pauseWhenPageIsHidden richColors theme='light'  closeButton/>
              <div className="text-textColor dark:text-darkTextColor dark:bg-darkBgColor duration-150 transition-all">
                <div className="container">
                  <Navbar/>
                  {children}
                  <Footer/>
                </div>
              </div>
            </ThemeContextProvider>
          </AuthProvider>
      </body>
    </html>
  );
};
