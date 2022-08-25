import React, { useState, useEffect } from 'react';
import gklogo from '../assets/img/gklogo.png';
import nav1 from '../assets/img/nav-icon1.svg';
import nav2 from '../assets/img/nav-icon2.svg';
import nav3 from '../assets/img/nav-icon3.svg';
import ham from '../assets/img/hamburger.png';

import 'animate.css';
import Skills from './Skills';
import HamMenu from './HamMenu';

const NavBar = () => {
  const [clicked, setClicked] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [hamt, sethamt] = useState('');
  const menuclick = (e) => {
    setClicked(e.target.text);
  };
  const hamclick = () => {
    sethamt(!hamt);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed top-0 w-full flex items-center justify-center flex-wrap h-19 z-50 py-5 ease-in-out duration-300 ${
          scrolled ? 'py-1 bg-black' : ''
        } }`}
      >
        <div className="navcontainer w-full flex items-center justify-between flex-wrap transition-all mx-28 px-3  mdx:mx-14 msx:mx-7">
          <img src={gklogo} style={{ maxHeight: '60px' }}></img>
          <div className="nav-collapse flex items-center flex-grow-1 msx:hidden">
            <div className="menu-holder ml-auto" onClick={menuclick}>
              <a
                href="#Home"
                className={
                  'px-6 text-lg font-meduim font-poppins hover:text-white cursor-pointer ' +
                  (clicked === 'Home' ? 'text-white' : 'text-[#b8b8b8]')
                }
              >
                {`Home`}
              </a>
              <a
                href="#Skills"
                className={
                  'px-6 text-lg font-meduim font-poppins transition ease-in-out cursor-pointer hover:text-white ' +
                  (clicked === 'Skills' ? 'text-white' : 'text-[#b8b8b8]')
                }
              >
                Skills
              </a>
              <a
                href="#Projects"
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
              <a href="#Contact">
                <button
                  className={`border border-white rounded font-poppins text-lg text-white font-medium px-8 ml-5 whitespace-nowrap transition-colors hover:bg-white hover:text-black ease-in-out duration-300 ${
                    scrolled ? 'py-3' : 'py-5'
                  } `}
                >
                  Let's Connect
                </button>
              </a>
            </span>
          </div>
          <div className="hidden msx:block">
            <div className="flex items-center">
              <HamMenu value={hamt}></HamMenu>
              <img
                onClick={hamclick}
                className={`inline-block z-50 h-full cursor-pointer ${
                  hamt ? 'animate-hanim1' : 'animate-hanim2'
                }`}
                src={ham}
              ></img>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
