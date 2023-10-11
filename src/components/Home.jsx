import React from "react";
import MyImag from "../assets/me.png";
import { BiSolidRightArrow } from "react-icons/bi";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl mt-48 sm:mt-0 sm:text-7xl font-bold text-white">
            I&apos;m Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et
            voluptates adipisci ipsam, inventore magnam quaerat odio similique,
            soluta commodi ea eos, tempora repellendus mollitia! Vitae dicta
            tempore molestias id?
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md gap-2 bg-gradient-to-t from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BiSolidRightArrow className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={MyImag}
            alt="My profile photo"
            className="h-auto max-profile-width transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
