import Image from "next/image";

const MyProjects = () => {
  const projects = [
    { id: 1, title: "Training React", description: "Description of the first project.", image: "/myproj/proj1.png" },
    { id: 2, title: "Training MERN Stack", description: "Description of the second project.", image: "/myproj/proj2.jpg" },
    { id: 3, title: "Training Tailwind CSS", description: "Description of the third project.", image: "/myproj/proj3.jpg" },
    { id: 4, title: "Training Next.js", description: "Description of the fourth project.", image: "/myproj/proj4.jpg" },
  ];

  return (
    <section id="myproject" className="p-8 text-center pt-20 pb-32">
      <h2 className="text-3xl text-gray-600 font-bold mb-20">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white pb-4 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 duration-300 w-80"
          >
            <div className="relative w-full h-72">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-xl pl-2 text-gray-600 font-semibold text-left mt-4">{project.title}</h3>
            <p className="text-gray-400 pl-2 text-left line-clamp-2 overflow-hidden">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
