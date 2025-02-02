import Image from "next/image";

const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen md:flex items-center justify-center text-center px-6 pt-16 md:pt-0 mb-20 md:mb-0">

            <div className="flex flex-col items-center pb-4 pt-4 ">
                <h2 className="text-gray-600 text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-400">
                    I am a passionate web developer with experience in Next.js, React, and Tailwind CSS. I enjoy building high-performance, user-friendly web applications and continuously improving my skills in modern web technologies.
                </p>
            </div>
            <div className="w-full max-w-3xl mb-6 rounded-lg overflow-hidden mt-20 ml-4 mr-4 ">
                <Image src="/AboutMe.jpg" alt="Decorative Image" width={800} height={200} className="object-cover w-full h-96" />
            </div>
        </section>
    );
};

export default AboutSection;