import Image from "next/image";

const SkillsSection = () => {
  const skills = [
    { name: "Next.js", imageUrl: "/mySkills/nextjs.svg" },
    { name: "React.js", imageUrl: "/mySkills/react.svg" },
    { name: "Typescript", imageUrl: "/mySkills/typescript.svg" },
    { name: "TailwindCSS", imageUrl: "/mySkills/tailwind.svg" },
    { name: "JavaScript", imageUrl: "/mySkills/javascrip.svg" },
    { name: "HTML", imageUrl: "/mySkills/html.svg" },
    { name: "CSS", imageUrl: "/mySkills/css.svg" },
    { name: "pytohn", imageUrl: "/mySkills/python.svg" },
    { name: "c#", imageUrl: "/mySkills/c-sharp.svg" }
  ];

  return (
    <section id="skills" className="bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 pt-20 pb-32">
      <h2 className="text-gray-600 text-4xl font-bold mb-20">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between h-32 hover:scale-105 hover:shadow-lg duration-300">
            <div className="text-left flex-1">
              <h3 className="text-2xl text-gray-400 font-semibold">{skill.name}</h3>
            </div>
            <div className="w-24 h-24">
              <Image src={skill.imageUrl} alt={skill.name} width={96} height={96} className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
