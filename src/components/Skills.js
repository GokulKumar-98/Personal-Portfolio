import React from 'react';
import bgimg from '../assets/img/color-sharp.png';
import Slider from './Slider';

const Skills = () => {
  return (
    <>
      <div id="Skills" className="skill-main relative  ">
        <div className="skill-cont w-full">
          <div className="skill-holder flex flex-wrap relative z-20 mb-10">
            <div className="skill-gg basis-full w-full">
              <div className="skill-cnt text-center text-white  px-12 py-14 rounded-3xl -mt-12 bg-[#151515]  mx-32 xlx:mx-20 lgx:mx-10 mdx:7 msx:mx-7">
                <h1 className="text-5xl font-centra font-bold mb-5">Skills</h1>
                <p className="font-poppins text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <br /> Lorem Ipsum has been the industry's standard dummy
                  text.
                </p>
                <Slider></Slider>
              </div>
            </div>
          </div>
        </div>
        <img src={bgimg} className="absolute top-[28%] z-0 w-[40%]"></img>
      </div>
    </>
  );
};

export default Skills;
