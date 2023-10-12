import React, { useState } from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import MovieShow from "../assets/portfolio/MovieShow.png";
import RooMic from "../assets/portfolio/RooMic.png";
import MathMagician from "../assets/portfolio/MathMagician.png";
import CodeAcadmy from "../assets/portfolio/CodeAcadamy.png";
import RestCountries from "../assets/portfolio/RestCountries.png";
import BugiBugy from "../assets/portfolio/BugiBugy.png";
import { Modal } from "./Modal";

export const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "RooMic home Sharing App",
      src: RooMic,
      description:
        "RooMic: Your go-to home sharing web app. Easily find and book homes, connect with compatible roommates. Built with React, Redux, and Rails for a seamless experience. Simplify the process, create a harmonious living environment.",
      demo: "https://room-rental-blond.vercel.app/",
      code: "https://github.com/Paul-tes/final-capstone-front-end",
    },
    {
      id: 2,
      title: "Math-magicians",
      src: MathMagician,
      description:
        "Math Magicians: The web-based calculator with a touch of inspiration. Built with React and Redux, this calculator app not only performs calculations but also displays motivational quotes. Simplify your math tasks while staying inspired.",
      demo: "https://math-magiciansv1-0.onrender.com/",
      code: "https://github.com/Paul-tes/Math-magicians",
    },
    {
      id: 3,
      title: "Code Academy",
      src: CodeAcadmy,
      description:
        "Code Academy Code Academy is a comprehensive website that provides all the information you need about our cutting-edge Boot Camp program. Our platform features detailed information about our upcoming class dates, as well as experienced instructors who will guide you through your coding journey. Additionally, our website provides valuable insights into the Code Academy Boot Camp experience, showcasing the innovative curriculum and teaching methods that make our program stand out from the rest.",
      demo: "https://paul-tes.github.io/CodeAcademy-/",
      code: "https://github.com/Paul-tes/CodeAcademy-",
    },
    {
      id: 4,
      title: "Rest-Countries",
      src: RestCountries,
      description:
        "Rest Countries is a mobile web application that displays a list of the world's countries along with information about each one that has been obtained from the Rest Countries API. constructed with React-redux.",
      demo: "https://countries-pupulation.onrender.com/",
      code: "https://github.com/Paul-tes/Rest-Countries",
    },
    {
      id: 5,
      title: "Movie-Show",
      src: MovieShow,
      description:
        "This Javasrcipt Capstone Project focuses on developing movie APIs that allow us watch movies content via apis and allow to leave likes and comments on them. built with HTML, CSS, and Java code.",
      demo: "https://tumainimaganiko.github.io/JS-capstone-project/dist/",
      code: "https://github.com/Paul-tes/Movie-Show",
    },
    {
      id: 6,
      title: "Stock-Market-Analysis-using-python",
      src: reactWeather,
      description:
        "Stock Market prediction using Decision Tree Regressor , classifier and linear Regression. Built with python, Decision Tree classifier Model in Jupyter-lab.",
      demo: "https://github.com/Paul-tes/Stock-Market-Analysis-using-python/blob/main/StockPricePridiction%26Classification.ipynb",
      code: "https://github.com/Paul-tes/Stock-Market-Analysis-using-python",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);
  const openModal = (id) => {
    const selectedProject = portfolio.find((project) => project.id === id);

    setSelectProject(selectedProject);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex justify-center flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4">Portfolio</p>
          <p className="py-6">Check out some of my works</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                onClick={() => openModal(id)}
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(code)}
                >
                  &lt; Code &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <Modal project={selectProject} onClose={closeModal} />}
    </div>
  );
};
