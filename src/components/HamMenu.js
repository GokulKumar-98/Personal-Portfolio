import React from 'react';
import homep from '../assets/img/home.png';
import skillp from '../assets/img/skills.png';
import projp from '../assets/img/project.png';

const HamMenu = (props) => {
  return (
    <div
      className={`z-40  p-1  items-center mr-2 rounded-lg animate__animated animate__fast ${
        props.value === '' ? 'hidden' : 'flex'
      } ${props.value ? 'animate__backInRight' : 'animate__backOutRight'}`}
    >
      <a href="#Home">
        <div className="flex flex-col items-center px-2">
          <img src={homep} className="h-[24px] w-[24px]"></img>
          <span className="text-sm font-poppins text-white mt-1">Home</span>
        </div>
      </a>
      <a href="#Skills">
        <div className="flex flex-col justify-center items-center px-2">
          <img src={skillp} className="h-[24px] w-[24px] "></img>
          <span className="text-sm font-poppins text-white mt-1">Skills</span>
        </div>
      </a>
      <a href="#Projects">
        <div className="flex flex-col items-center px-2">
          <img src={projp} className="h-[24px] w-[24px]"></img>
          <span className="text-sm font-poppins text-white mt-1">Works</span>
        </div>
      </a>
    </div>
  );
};

export default HamMenu;
