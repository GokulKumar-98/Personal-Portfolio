import React from 'react';
import 'animate.css';
import ProjectCard from './ProjectCard';
import proj1 from '../assets/img/proj1.png';
import proj2 from '../assets/img/proj2.png';
import soon from '../assets/img/comingsoon.png';

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
        </div>
      </div>
    </section>
  );
};

export default Projects;
