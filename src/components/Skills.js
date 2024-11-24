import React from 'react';
import bgimg from '../assets/img/color-sharp.png';
import Skillsbox from './Skillsbox';
import Slider from './Slider';

const Skills = () => {
  const newskills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Reactjs',
    'GIT',
    'GitHub',
    'Resposive Design',
    'Tailwind Css',
    'Redux',
    'Material UI',
    'PhotoShop',
    'MySQL',
  ];
  const wdySkills = [
    'Workday Studio',
    'EIB',
    'Core Connectors',
    'BIRT',
    'PECI',
    'PICOF',
    'WECI',
    'Payroll Connectors',
    'XSLT',
    'XML',
    'Web Services (SOAP, REST, RaaS)',
  ];
  return (
    <>
      <div id="Skills" className="skill-main relative  ">
        <div className="skill-cont w-full">
          <div className="skill-holder flex flex-wrap relative z-20 mb-10">
            <div className="skill-gg basis-full w-full">
              <div className="skill-cnt text-center items-center text-white  px-12 py-14 rounded-3xl -mt-12 bg-[#151515]  mx-32 xlx:mx-20 lgx:mx-10 mdx:7 msx:mx-7">
                <div className="flex flex-col items-center">
                  <h1 className="text-5xl font-centra font-bold mb-5">
                    Skills
                  </h1>
                  <p className="font-poppins text-center">
                    <b style={{ color: '#ff8a54' }}>
                      Workday Integration Skills:{' '}
                    </b>
                    Here you will find more details about my current skills
                    focused on Workday Integration, including tools and
                    technologies I use. These are the core areas I excel in
                    professionally.
                  </p>
                  <div className="group flex justify-center flex-wrap my-5">
                    <Skillsbox value={wdySkills}></Skillsbox>
                  </div>
                  <p className="font-poppins text-center">
                    <b style={{ color: '#ff8a54' }}>Web Development Skills: </b>
                    This section highlights my web development skills,
                    showcasing my passion for building responsive, user-friendly
                    websites and exploring creative solutions through modern web
                    technologies.
                  </p>
                  <div className="group flex justify-center flex-wrap my-5">
                    <Skillsbox value={newskills}></Skillsbox>
                  </div>
                </div>
                <Slider></Slider>
              </div>
            </div>
          </div>
        </div>
        <img
          src={bgimg}
          className="absolute top-[28%] z-0 w-[40%]"
          alt=""
        ></img>
      </div>
    </>
  );
};

export default Skills;
