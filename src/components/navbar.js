import { motion, useCycle } from "framer-motion";
import * as React from "react";
import logo from "./LogoLYKY.svg"

const sideBar = () => (
  <motion.div
    className="lg:hidden absolute inline-block z-50 m-2 px-1 py-1 inset-0 bg-white rounded-md top-10"
    animate={{ scaleY: [0, 1] }}
    transition={{
      duration: 2,
      times: [0, 0.1],
    }}
  >
    <ul className="text-black bg-white bg-opacity-80">
      <li>
        <a className="inline-block py-2 px-4 font-bold" href="/">Accueil</a>
      </li>
      <li>
        <a className="inline-block py-2 px-4" href="/">Documentation</a>
      </li>
      <li>
        <a className="inline-block py-2 px-4" href="/">FAQ</a>
      </li>
    </ul>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setBarOpen] = useCycle(false, true);
  return (
    <div>
      <nav
        id="header"
        className="fixed w-full z-30 top-0 text-white bg-trueGray-900"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              
              <object className="absolute w-20 h-20" type="image/svg+xml" data={logo}>svg-logo</object>
              <div className="absolute">LYKY</div>
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={() => setBarOpen()}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-white font-bold no-underline"
                  href="/"
                >
                  Accueil
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-white no-underline hover:text-indigo-500 hover:text-underline py-2 px-4"
                  href="/"
                >
                  Documentation
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-white no-underline hover:text-indigo-500 hover:text-underline py-2 px-4"
                  href="/"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Souscrire
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        {isOpen ? sideBar() : ""}
      </nav>
    </div>
  );
};
export default Navbar;
