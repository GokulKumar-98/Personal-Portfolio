import React, { useState } from 'react';

import gklogo from '../assets/img/gklogo.png';
import nav1 from '../assets/img/nav-icon1.svg';
import nav2 from '../assets/img/nav-icon2.svg';
import nav3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
  const [clicked, setClicked] = useState('Home');
  const onclick = (e) => {
    setClicked(e.target.text);
  };
  return (
    <>
      <nav className="navbar fixed top-0 w-full flex items-center justify-center flex-wrap h-19  py-5 z-50">
        <div className="navcontainer w-full flex items-center justify-between flex-wrap transition-all mx-28 px-3 mdx:mx-14 msx:mx-7">
          <img src={gklogo} style={{ maxHeight: '60px' }}></img>
          <div className="nav-collapse flex items-center flex-grow-1 msx:hidden">
            <div className="menu-holder ml-auto" onClick={onclick}>
              <a
                className={
                  'px-6 text-lg font-meduim font-poppins hover:text-white cursor-pointer ' +
                  (clicked === 'Home' ? 'text-white' : 'text-[#b8b8b8]')
                }
              >
                Home
              </a>
              <a
                className={
                  'px-6 text-lg font-meduim font-poppins transition ease-in-out cursor-pointer hover:text-white ' +
                  (clicked === 'Skills' ? 'text-white' : 'text-[#b8b8b8]')
                }
              >
                Skills
              </a>
              <a
                className={
                  'px-6 text-lg font-meduim font-poppins cursor-pointer hover:text-white ' +
                  (clicked === 'Projects' ? 'text-white' : 'text-[#b8b8b8]')
                }
              >
                Projects
              </a>
            </div>
            <span className="button-holder py-2 flex  items-center">
              <div className="social-icons ml-4 lgx:hidden">
                <div className="group circle inline-flex items-center justify-center mr-1.5 h-10 w-10 bg-gray-800/50  border border-white rounded-full transition ease-in-out hover:bg-white">
                  <a href="#">
                    <img src={nav1} className="group-hover:invert"></img>
                  </a>
                </div>
                <div className="group circle inline-flex items-center justify-center mr-1.5 h-10 w-10 bg-gray-800/50  border border-white rounded-full transition ease-in-out hover:bg-white">
                  <a href="#">
                    <img src={nav2} className="group-hover:invert"></img>
                  </a>
                </div>
                <div className="group circle inline-flex items-center justify-center mr-1.5 h-10 w-10 bg-gray-800/50  border border-white rounded-full transition ease-in-out hover:bg-white">
                  <a href="#">
                    <img src={nav3} className="group-hover:invert"></img>
                  </a>
                </div>
              </div>
              <a href="#">
                <button className="border border-white rounded font-poppins text-lg text-white font-medium py-5 px-8 ml-5 whitespace-nowrap transition-colors hover:bg-white hover:text-black">
                  Let's Connect
                </button>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
