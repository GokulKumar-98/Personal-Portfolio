import React from 'react';

const Projects = () => {
  return (
    <section className="text-white bg-black relative">
      <div className="flex flex-col items-center justify-center px-12 py-14 mx-20">
        <h1 className="text-5xl font-centra font-bold mb-5">Projects</h1>
        <p className="font-poppins text-center mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="grid grid-cols-3 gap-4 w-full lgx:grid-cols-2 smx:grid-cols-1">
          <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center ">
            1
          </div>
          <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            2
          </div>
          <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            3
          </div>
          <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            4
          </div>
          <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            5
          </div>
          <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            6
          </div>
          <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            7
          </div>
          <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            8
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
