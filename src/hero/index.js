import React from "react";
import Tilt from 'react-parallax-tilt'

export default function Hero() {
  return (
    <div className="w-screen " id="home">
      <div className="">
        <div className=" inset-0 lg:top-[180px] sm:top-1    mx-auto sm:px-16 px-6 lg:flex lg:flex-row items-start gap-5 mt-20">
          <div className=" lg:ml-20">
            <h1
              className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 `}
            >
              Hellow, i am <span className="text-[#915EFF]">Kaustubh</span>
            </h1>
            <p
              className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
            >
              I am a React js and Node js <br className="sm:block hidden" />
              Web developer.
            </p>
          </div>
          <div className=" relative">
            <Tilt>

            <img
              src="/kJ63zp01.svg"
              className="  w-[30rem] lg:mr-80 lg:mt-[-4rem]   "
              alt="Computer-image"
              />
              </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}
