import React from 'react';
import contactimg from '../assets/img/contact-img.svg';

const contact = () => {
  //   const inputtyle = `placeholder:italic placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
  //     placeholder="Search for anything...`;
  //   const inpstyle = `placeholder:italic placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
  //     placeholder="Search for anything...`;

  const inpsty =
    '`bg-white/10 col-span-2 text-white placeholder:text-white px-4 py-5 rounded-[7px] mb-[8px] mr-[8px] border border-white/50 ease-in-out duration-300 focus:outline-none  focus:bg-white focus:text-black focus:placeholder:text-black/50`';

  return (
    <section
      className="relative contact-main py-14 "
      style={{
        background: 'linear-gradient(90.21deg,#aa367c -5.91%,#4a2fbd 111.58%)',
      }}
    >
      <div className="grid grid-cols-2 gap-4  msx:grid-cols-1 mx-32 xlx:mx-20 lgx:mx-10 mdx:7 msx:mx-7">
        <img
          className="flex items-center justify-center h-96 animate-updn"
          src={contactimg}
        />
        <div className="form-holder text-white">
          <h1 className="text-5xl font-centra font-bold mb-5">Get In Touch</h1>
          <form
            className="grid grid-cols-4 text-black font-medium tracking-wide font-poppins"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type={'text'}
              placeholder={'First Name'}
              minLength={3}
              className={`bg-white/10 ` + inpsty}
            ></input>
            <input
              type={'text'}
              placeholder={'Last Name'}
              minLength={3}
              required
              className={'bg-white/10 ' + inpsty}
            ></input>
            <input
              type={'email'}
              placeholder={'Email Address'}
              pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2, 4}$'}
              required
              className={'bg-white/10 ' + inpsty}
            ></input>
            <input
              type={'tel'}
              required
              placeholder={'Mobile Number'}
              className={'bg-white/10 ' + inpsty}
            ></input>
            <textarea
              placeholder={'Message'}
              className={
                'col-span-4 focus:outline-none bg-white/10 msx:col-span-2' +
                inpsty
              }
            ></textarea>
            <button
              className={
                'col-start-2 col-end-4 justify-center  border border-white rounded font-poppins text-lg text-black bg-white font-semibold py-5 mt-4 mx-7 whitespace-nowrap ease-in-out duration-300  hover:bg-black hover:text-white mdx:mx-2'
              }
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contact;
