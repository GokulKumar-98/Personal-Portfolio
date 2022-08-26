import React from 'react';
import gklogo from '../assets/img/gklogo.png';
import lnk from '../assets/img/nav-icon1.svg';
import insg from '../assets/img/nav-icon3.svg';
import github from '../assets/img/githu.png';

const FooterSec = () => {
  return (
    <footer className=" text-white bg-footer-bg bg-cover">
      <div className="footcontainer flex items-start justify-between flex-wrap mx-28 px-3 pt-14 pb-12 border-b border-white/50 mdx:mx-14 msx:mx-7">
        <div className="leftfoot max-w-3xl w-[40%] order-1 msx:w-full msx:order-2 msx:mt-10">
          <div className="leftfoot flex justify-start items-center">
            <img alt="" src={gklogo} style={{ maxHeight: '50px' }}></img>
            <h1 className="text-2xl font-centra uppercase font-bold ml-3 whitespace-nowrap tracking-[1px]">
              Gokul Kumar
            </h1>
          </div>

          <p className="text-left font-poppins mt-5">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="rightfoot flex flex-col order-2 items-start msx:order-1">
          <h1 className="text-2xl font-centra font-bold tracking-[1px]">
            SOCIAL
          </h1>
          <div className="mx-2xl flex flex-row justify-between mt-5">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/gokul-kumar-882972141/"
            >
              <img
                className="h-5 w-5  mr-4"
                src={lnk}
                alt="Gokul's Linkedin Profile"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/GokulKumar-98/Personal-Portfolio"
            >
              <img className="h-6 mr-4" alt="" src={github} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/Gokulkriz27"
            >
              <img
                className="h-6 mr-4"
                alt=""
                src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/gokul_kriz27/"
            >
              <img className="h-5 mr-4" alt="" src={insg} />
            </a>
          </div>
        </div>
      </div>

      <div className=" flex py-5 font-poppins text-[11px] font-light justify-center text-[#b8b8b8]">
        Made with ❤ by Gokul Kumar, using react.js and tailwind css
      </div>
    </footer>
  );
};

export default FooterSec;
