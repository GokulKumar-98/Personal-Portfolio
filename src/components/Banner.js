import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import astro from '../assets/img/header-img.svg';
import ar1 from '../assets/img/arrow2.svg';

const Banner = () => {
  return (
    <div className="banner bg-banner-bg bg-top bg-cover pt-64 pb-24 z-50 msx:pt-32">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <span>
              <button className="text-xl text-white font-semibold font-centra flex items-center">
                Let's Connect
                <img src={ar1} className="h-4 pl-2"></img>
              </button>
            </span>
          </div>
          <div className="rightside flex items-center justify-center msx:">
            <div className="imghld">
              <img src={astro} className="h-96 animate-updn"></img>
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
        'Web Developer', // Types 'One'
        5000, // Waits 1s
        'Web Designer', // Deletes 'One' and types 'Two'
        5000, // Waits 2s
      ]}
      wrapper="div"
      speed={5}
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default Banner;
