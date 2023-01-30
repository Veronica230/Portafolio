import React from "react";
import cssProjects from "../assets/comandovoz.png";
import devlog from "../assets/animaciones.png";
import getInspirred from "../assets/tiempos.png";

const Projects = () => {
  const projects = [
    {
      img: cssProjects,
      title: "Animaciones por comando de voz",
      desc: "Proyecto realizado con html, vanilla js y css para manipular imagenes a traves de comandos de voz",
      live: "",
      code: "",
    },
    {
      img: devlog,
      title: "Imagenes 3D",
      desc: "Proyecto realizado con html, vanilla js y css para renderizar modelos 3D a traves de codigos QR",
      live: "",
      code: "",
    },
    {
      img: getInspirred,
      title: "Time manager",
      desc: "Web application para manejo de tiempos en una escuela. (operaciones CRUD)",
      live: "",
      code: "",
    },
  ];

  return (
    <section className="bg-primary text-black px-5 py-14" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-pink-500 pb-2">
            Proyectos
          </h2>

          <p className="pb-5">
            Estos son algunos de los proyectos que realizado con React, CSS, MUI (material ui) y vanilla JS. 
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-black">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-pink-500 hover:bg-black hover:text-pink-500 font-bold"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
