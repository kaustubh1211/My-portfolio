import React from "react";
import { education ,skills} from "../data/constant";

export default function Education() {
  return (
    <div id="education" className="w-screen text-white ">
      <div className="container px-5 py-10 mx-auto mt-9">
        <div className="flex flex-col text-center w-full mb-10">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-10 mx-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
      <h1 className=" text-3xl mt-3 "> Education</h1>
      <p className="text-lg mt-2">This is a summary of my educational background. </p>
        </div>
        <div className="flex flex-wrap m-4 p-4 ">
            {education.map((educations)=>(
              <div key={educations.year} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-800 p-8 rounded">
                  <h2 className="text-white font-semibold text-center">
                    {educations.branch}
                  </h2>
                  <p className="text-center mt-2 text-gray-300"> 
                    {educations.college}
                  </p>
                  <p className="text-center mt-4 text-gray-300">{educations.year}</p>
                </div>
              </div>
            ))}

        </div>
   
      </div>

    </div>
  );
}
