import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const HomeSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center mt-16"
            style={{ backgroundImage: 'url(bg-home.jpg)' }}
        >
            <div className="bg-black/10 rounded-2xl pt-6">
                <h1 className="text-4xl font-bold mt-4 text-gray-200 pb-3">Turki Omar ahmed Al-Saar</h1>
                <p className="text-gray-400 mt-2 max-w-lg ">
                    Hello, I am a web developer specializing in Next.js and React. I love creating smooth and elegant web experiences.
                </p>
                <div className=" flex gap-4 mt-12 bg-slate-500/5 p-3 rounded-lg items-start pl-10">
                
                    <Link href="#"><FaFacebook className="my-icons rounded-full text-blue-600 bg-white" /> </Link>
                    <Link href="#"><FaXTwitter className="my-icons text-gray-200 " /> </Link>
                    <Link href="#"><FaTelegram className="my-icons text-blue-500 bg-white rounded-full" /> </Link>
                    <Link href="#"><FaInstagram className="my-icons text-pink-600 bg-white rounded-lg" /></Link>
                    <Link href="#footer"><SiGmail className="my-icons text-red-700  " /> </Link>



                </div>
            </div>
        </section>
    );
};

export default HomeSection;
