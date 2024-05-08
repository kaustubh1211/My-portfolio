import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <img
            src=" /kp-high-resolution-logo.jpeg"
            className="w-100 h-10 mr-2"
            alt="kp-high-resolution-logo"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 bg-white ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 bg-white ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-lg lg:flex-grow   ">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-6 text-white "
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-6 text-white"
            >
              Skill
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-3 text-white"
            >
              Eduaction
            </a>
          </div>
          <div className=" gap-3 flex ">
            <button className="inline-flex items-center bg-amber-500 border-0 py-1 px-1 text-white rounded-md">
              Github
            </button>
            <button className="inline-flex items-center bg-amber-500 border-0 py-1 px-1 text-white rounded-md">
              Linkdien
            </button>
            <button className="inline-flex items-center bg-amber-500 border-0 py-1 px-1 text-white rounded-md ">
              Twitter
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
