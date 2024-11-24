import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import astro from '../assets/img/header-img.svg';
import ar1 from '../assets/img/arrow2.svg';

const Banner = () => {
  return (
    <div
      id="Home"
      className={`banner bg-banner-bg bg-top bg-cover pt-64 pb-24 z-50  msx:pt-32`}
    >
      <div className="mx-32 xlx:mx-20 lgx:mx-12 mdx:7 msx:mx-7">
        <div className="grid grid-cols-2 gap-2 msx:grid-cols-1">
          <div className=" leftside col-span-1">
            <span
              className="text-xl font-poppins inline-block font-medium py-2 px-2.5  border border-white  text-white mb-4"
              style={{
                background:
                  'linear-gradient(90.21deg,rgba(170,54,124,.5) -5.91%,rgba(74,47,189,.5) 111.58%)',
              }}
            >
              Welcome to my Portfolio
            </span>
            <h1 className="text-6xl text-white font-centra font-black">
              Hi! I'm Gokul Kumar<Typing></Typing>
            </h1>
            <p className="text-[#b8b8b8] flex-wrap font-poppins py-6">
              I am a Workday Integration Consultant with over 4 years of IT
              experience, including 2 years specializing in Workday
              integrations. My expertise lies in automating and optimizing HR
              and financial processes using tools like Workday Studio, EIB,
              Connectors, and BIRT. I have hands-on experience with XML, XSLT,
              REST, SOAP, and RaaS Web Services to build scalable and efficient
              solutions.
            </p>
            <p className="text-[#b8b8b8] flex-wrap font-poppins pb-6">
              Alongside my integration expertise, I am passionate about web
              development and enjoy creating user-friendly, functional websites.
              This combination of integration expertise and web development
              interest enables me to deliver well-rounded, efficient, and
              user-focused solutions.
            </p>
            <span>
              <a href="#Contact">
                <button className="text-xl text-white font-semibold font-centra flex items-center">
                  Let's Connect
                  <img alt="" src={ar1} className="h-4 pl-2"></img>
                </button>
              </a>
            </span>
          </div>
          <div className="rightside flex items-center justify-center msx:">
            <div className="imghld">
              <img alt="" src={astro} className="h-96 animate-updn"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Typing = () => {
  return (
    <TypeAnimation
      className=" text-white z-40"
      sequence={[
        'Workday Consultant', // Types 'One'
        2000, // Waits 1s
        '',
        2000,
        'Web Developer', // Types 'One'
        2000, // Waits 1s
        '',
        2000,
        'Web Designer',
        2000, // Waits 2s
      ]}
      wrapper="div"
      speed={7}
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default Banner;
