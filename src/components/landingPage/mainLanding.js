import * as React from "react";
import LandingAnimation from "./animation";

const MainLanding = () => {
  return (
    <div className="pt-24 bg-trueGray-900">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight text-white">
            Gagnez du temps, laissez{" "}
            <span className="text-indigo-600">LYKY</span> le faire !
          </h1>
          <p className="leading-normal text-2xl mb-8 text-white">
          Une solution simple, ergonomique et totalement automatisée de création d'emplois du temps via une intelligence artificielle.
          </p>
          <div className="container">
            <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Souscrire
            </button>
          </div>
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
          <div className=" py-4 px-4">
            <div className="w-full z-50">
              <LandingAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLanding;
