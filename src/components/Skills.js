import React from 'react';
import bgimg from '../assets/img/color-sharp.png';

const Skills = () => {
  return (
    <>
      <div className="relative z-20 ">
        <div className="skill-holder mx-36">
          <div className="skill-cnt text-white flex flex-col items-center justify-center px-12 py-14 rounded-3xl -mt-12 bg-[#151515]">
            <h1 className="text-5xl font-centra font-bold mb-5">Skills</h1>
            <p className="font-poppins text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>
      </div>
      <img src={bgimg} className="absolute top-[48%] -z-[-4] w-[40%]"></img>
    </>
  );
};

export default Skills;
