import React from 'react';
import gklogo from '../assets/img/gklogo.png';
import lnk from '../assets/img/nav-icon1.svg';
import insg from '../assets/img/nav-icon3.svg';
import footerbg from '../assets/img/footer-bg.png';

const FooterSec = () => {
  return (
    <footer className=" text-white bg-footer-bg bg-cover">
      <div className="footcontainer flex items-start justify-between flex-wrap mx-28 px-3 pt-14 pb-12 border-b border-slate-500 mdx:mx-14 msx:mx-7">
        <div className="leftfoot max-w-3xl w-[40%] order-1 msx:w-full msx:order-2 msx:mt-10">
          <div className="leftfoot flex justify-start items-center">
            <img src={gklogo} style={{ maxHeight: '50px' }}></img>
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
            <a target="_blank">
              <img
                className="h-5 w-5  mr-4"
                src={lnk}
                alt="Ram Maheshwari Linkedin Profile"
              />
            </a>
            <a target="_blank">
              <img
                className="h-6 mr-4"
                src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
              />
            </a>
            <a target="_blank">
              <img
                className="h-6 mr-4"
                src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
              />
            </a>
            <a target="_blank">
              <img className="h-5 mr-4" src={insg} />
            </a>
          </div>
        </div>
      </div>

      <div className=" flex py-5 font-poppins text-[11px] font-light justify-center text-[#b8b8b8]">
        This Template is Made with ❤ by Gokul Kumar, using react and tailwind
      </div>
    </footer>
  );
};

export default FooterSec;
