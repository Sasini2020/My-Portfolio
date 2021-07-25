
import { BadgeCheckIcon, ChipIcon, TerminalIcon, DatabaseIcon, GlobeAltIcon } from "@heroicons/react/solid";
import React from "react";
import { web, db, uix, programming} from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I've worked with a range of following technologies in the web development and the programming world. From Back-end To Design.
          </p>
        </div>
        {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <TerminalIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-3xl text-3xl font-medium title-font text-white mb-4">
          Programming Languages
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {programming.map((programming) => (
        <div key={programming} className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <BadgeCheckIcon className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" />
            <span className="title-font font-medium text-white">
              {programming}
            </span>
          </div>
        </div>
        ))}
        </div>
      </div>

      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <GlobeAltIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-3xl text-3xl font-medium title-font text-white mb-4">
          Web Development
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {web.map((web) => (
        <div key={web} className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <BadgeCheckIcon className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" />
            <span className="title-font font-medium text-white">
              {web}
            </span>
          </div>
        </div>
        ))}
        </div>
      </div>


      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <DatabaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-3xl text-3xl font-medium title-font text-white mb-4">
          Database
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {db.map((db) => (
        <div key={db} className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <BadgeCheckIcon className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" />
            <span className="title-font font-medium text-white">
              {db}
            </span>
          </div>
        </div>
        ))}
        </div>
      </div>


      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <TerminalIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-3xl text-3xl font-medium title-font text-white mb-4">
          UI/UX
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {uix.map((uix) => (
        <div key={uix} className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <BadgeCheckIcon className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" />
            <span className="title-font font-medium text-white">
              {uix}
            </span>
          </div>
        </div>
        ))}
        </div>
      </div>

    </section>
  );
}