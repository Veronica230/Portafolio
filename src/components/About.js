import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-black px-5 py-14" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-pink-500 pb-2">
            Sobre mi
          </h2>

          <p className="pb-5">
            Estudiante próxima a egresar de la carrera de Ingeniera en Tecnologías de la Información y Comunicación. Buscando una oportunidad laboral para poder demostrar mis habilidades, con total compromiso, siempre motivada a aprender nuevas tecnologías.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
