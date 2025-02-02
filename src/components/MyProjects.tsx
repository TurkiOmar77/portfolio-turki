const MyProjects = () => {
  const projects = [
    { id: 1, title: "training react", description: "Description of the first project.", image: "/myproj/proj1.png" },
    { id: 2, title: "training mern stack", description: "Description of the second project.", image: "/myproj/proj2.jpg" },
    { id: 3, title: "training tailwindcss", description: "Description of the third project.", image: "/myproj/proj3.jpg" },
    { id: 4, title: "training next.js", description: "Description of the third project.", image: "/myproj/proj4.jpg" },
  ];

  return (
    <section id="myprject" className="p-8 text-center pt-20 pb-32">
      <h2 className="text-3xl text-gray-600 font-bold mb-20">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 duration-300 w-80">
            <img src={project.image} alt={project.title} className="w-full h-72 object-fill rounded-md mb-4" />
            <h3 className="text-xl text-gray-600 font-semibold text-left">{project.title}</h3>
            <p className="text-gray-400 text-left line-clamp-2 overflow-hidden">{project.description}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default MyProjects;
