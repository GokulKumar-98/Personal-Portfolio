import React, { useState, useEffect } from 'react';
import nav1 from '../assets/img/githu.png';
import ext from '../assets/img/external-link.png';
const ProjectCard = () => {
  const [hov, setHov] = useState('hidden');
  const [fade, setFade] = useState('hidden');
  const entered = (e) => {
    setHov('animate__slideInDown');
    setFade('animate__fadeInUp');
  };
  const left = (e) => {
    setHov('animate__slideOutUp');
    setFade('animate__fadeOutDown');
  };
  return (
    <div
      onMouseEnter={entered}
      onMouseLeave={left}
      className="group  rounded-xl flex items-center justify-center "
    >
      <div className=" rounded-xl relative overflow-hidden h-full flex items-center justify-center ">
        <div
          style={{
            background:
              'linear-gradient(90.21deg,rgba(170,54,124,.8) -5.91%,rgba(74,47,189,.8) 111.58%)',
          }}
          className={`flex items-center justify-center absolute h-full w-full animate__animated animate__faster ${hov} `}
        ></div>
        <div
          className={`info absolute animate__animated animate__faster ${fade}`}
        >
          <h1
            className={` text-center text-3xl font-centra font-bold mb-5 pb-5`}
          >
            Adobe App Menu
          </h1>
          <div className="flex justify-between px-5 mt-5 ">
            <a href="#Home">
              <img className=" h-14 " src={nav1}></img>
            </a>
            <a href="#Home">
              <img className=" h-14" src={ext}></img>
            </a>
          </div>
        </div>
        <img
          className="h-full "
          src={
            'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          }
        ></img>
      </div>
    </div>
  );
};

export default ProjectCard;
