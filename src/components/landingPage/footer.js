import * as React from "react";

const Footer = () => (
    <footer className="bg-trueGray-900">
      <div className="container mx-auto px-8 divide-y">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a className="text-indigo-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
              LYKY
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-indigo-500 md:mb-6">Liens Utiles</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">FAQ</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">Aide</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">Assistance</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-indigo-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">Mentions Légales</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">RGPD</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-indigo-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">Facebook</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">Linkedin</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-indigo-500 md:mb-6">Lyky</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">À propos</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="/" className="no-underline hover:underline text-white hover:text-indigo-500">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-trueGray-400 p-4 text-1xl  text-center"> Copyright </div>
      </div>
    </footer>
)

export default Footer;