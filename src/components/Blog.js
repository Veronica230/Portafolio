import React from "react";

const Blog = () => {
  const skills = ['React JS', 'Javascript', 'CSS', 'HTML', 'GIT', 'PHP', 'AWS', 'MYSQL'];

  return (
    <section className="bg-primary text-black px-5 py-14" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-pink-500 pb-2">
            Skills
          </h2>
          <p className="pb-5">Algunas de las tecnologias que manejo.</p>
        </div>
        <div></div>
      </div>

      <div className="projects container mx-auto flex flex-row gap-3 flex-wrap">
        {
          skills?.map((item, index) => (
            <div className="px-2 py-1 bg-pink-400 text-base rounded-md font-semibold" key={`${item}-${index + 1}`}>{item}</div>
          ))
        }
      </div>
    </section>
  );
};

export default Blog;
