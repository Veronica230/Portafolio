import React from "react";
import HeroImg from "../assets/girl.png";

import {
  AiOutlineGithub,
  AiOutlineLinkedin
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-14">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl"><span className="text-black">V</span>eronica Pavana Lara<br />
            Ingeniera en TIC´S
          </h1>

          <p className="py-5 text-black">
            Me gusta hacer codigo en Javascript.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://github.com/Veronica230"
              target="_blank"
              className="pr-4 inline-block text-pink-500 hover:text-black" rel="noreferrer"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/ver%C3%B3nica-pavana-lara-547343264/"
              target="_blank"
              className="pr-4 inline-block text-pink-500 hover:text-black" rel="noreferrer"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
