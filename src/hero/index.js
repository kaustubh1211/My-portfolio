import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="   items-center flex-shrink-0 text-white absolute mx-auto ">
        <img
          src="/herobg.png"
          className=" w-screen h-screen"
          alt="hero-image"
        />
      </div>

      <div className="absolute inset-0 top-[180px]   mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 `}
          >
            Hi, I'm <span className="text-[#915EFF]">Kaustubh</span>
          </h1>
          <p
            className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
          >
            I am Web devloper <br className="sm:block hidden" />
            React js & Node js
          </p>
        </div>
      </div>
    </div>
  );
}
