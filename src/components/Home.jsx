import React from "react";
import MyImag from "../assets/me.png";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-scroll";
import { Portfolio } from "./Portfolio";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-around h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl mt-48 sm:mt-0 sm:text-7xl font-bold text-white">
            I&apos;m Paul. <br /> Glad to see you!
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I’m a software developer! I can help you build a product , feature
            or website Look through some of my work and experience! If you like
            what you see and have a project you need coded, don’t hesitate to
            contact me.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md gap-2 bg-gradient-to-t from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BiSolidRightArrow className="ml-1 animate-bounce" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={MyImag}
            alt="My profile photo"
            className="h-auto mx-auto max-profile-width rounded-lg transition-all duration-300 filter cursor-pointer hover:grayscale z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
