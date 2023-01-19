import React from 'react';
import 'animate.css';
import ProjectCard from './ProjectCard';
import proj1 from '../assets/img/proj1.png';
import proj2 from '../assets/img/proj2.png';
import soon from '../assets/img/comingsoon.png';
import rps from '../assets/img/rps.jpg';
import reduxcart from '../assets/img/reduxcart.jpg';
import ipclock from '../assets/img/ipclock.jpg';

const details = [
  {
    title: 'Personal Portfolio',
    imge: <img className="h-full " src={proj2} alt="" />,
    gitlink: 'https://github.com/GokulKumar-98/Personal-Portfolio',
    extlink: '',
  },
  {
    title: 'Adobe App Menu',
    imge: <img className="h-full " src={proj1} alt="" />,
    gitlink: 'https://github.com/GokulKumar-98/Adobe-App',
    extlink: 'https://adobe-menu.netlify.app/',
  },
  {
    title: 'IP Clock',
    imge: <img className="h-full " src={ipclock} alt="" />,
    gitlink: 'https://github.com/GokulKumar-98/IP-Clock',
    extlink: 'https://ip-clock-quotes.netlify.app/',
  },
  {
    title: 'Rock Paper Scissor',
    imge: <img className="h-full " src={rps} alt="" />,
    gitlink: 'https://github.com/GokulKumar-98/rock-paper-scissors',
    extlink: 'https://rockspaperscissorsgame.netlify.app/',
  },
  {
    title: 'Redux Toolkit Cart',
    imge: <img className="h-full " src={reduxcart} alt="" />,
    gitlink: 'https://github.com/GokulKumar-98/ReduxCart',
    extlink: 'https://redux-cart-toolkit.netlify.app/',
  },

  {
    title: 'In Progress...',
    imge: <img className="h-full " src={soon} alt="" />,
    gitlink: '',
    extlink: '',
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="text-white bg-black relative">
      <div className="flex flex-col items-center justify-center px-12 py-14 xlx:mx-20 lgx:mx-10 mdx:7 msx:mx-7">
        <h1 className="text-5xl font-centra font-bold mb-5 ">Projects</h1>
        <p className="font-poppins text-center mb-6">
          Here you will find some of the personal projects that I created.
        </p>
        <div className="grid grid-cols-3 gap-4 w-full  lgx:grid-cols-2 smx:grid-cols-1">
          <ProjectCard value={details[0]}></ProjectCard>
          <ProjectCard value={details[1]}></ProjectCard>
          <ProjectCard value={details[2]}></ProjectCard>
          <ProjectCard value={details[3]}></ProjectCard>
          <ProjectCard value={details[4]}></ProjectCard>
          <ProjectCard value={details[5]}></ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
