import React from "react";
import { skills } from "../data/constant";

export default function Skill() {
  return (
    <div className="  w-screen lg:mt-28   " id="skill">
      <div className=" container px-5 mx-auto ">
        <div className=" text-center  mt-7 mb-5 ">
          <h1 className="text-white text-4xl font-semibold "> Skills and technology</h1>
        </div>
      </div>
      <div className="flex flex-wrap lg:w-4/5  sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill.title} className="p-2 sm:w-1/2 w-full ">
            <div className=" bg-gray-800 rounded flex p-5  h-full items-center hover:bg-gray-500  ">
              <img
                className="w-6 h-6 flex-shrink-0 mr-4"
                alt="icon"
                src={skill.img}
              ></img>
              <span className="title-font font-medium text-white">
                {" "}
                {skill.title}{" "}
                
              </span>
           
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
}
