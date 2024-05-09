import React from "react";

export default function Hero() {
  return (
    <div className="w-screen h-screen">
      <div className="   items-center flex-shrink-0 text-white absolute mx-auto ">
        <img
          src="/herobg.png"
          className=" w-screen h-screen"
          alt="hero-image"
        />
      </div>
      <div className="">
        <div className="absolute inset-0 lg:top-[180px]   mx-auto sm:px-16 px-6 lg:flex lg:flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
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
            <img src="/kJ63zp01.svg"   className="  w-[30rem] lg:mr-80 lg:mt-[-4rem]   " alt="Computer-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
