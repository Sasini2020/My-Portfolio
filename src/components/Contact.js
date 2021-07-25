import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  library.add(fab);

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-full	 md:full	 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CALL
              </h2>
              <p className="mt-1 hover:underline">
                (+94) 76 816 5947
              </p>
            </div>
           
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-pink-400 leading-relaxed hover:underline ">
                bgsssandamali@gmail.com
              </a>
            </div>&nbsp;&nbsp;&nbsp;
            <div className="mt-8">
              <div className="flex flex-row mt-1" role="group">
                <a
                  href="https://github.com/Sasini2020/"
                  className="transition duration-500 ease-in-out group flex px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-pink-700 rounded-full "
                >
                  <FontAwesomeIcon
                    className="pr-0.5"
                    size="2x"
                    icon={["fab", "github"]}
                  />
                </a>
                &nbsp;&nbsp;

                <a
                  href="https://www.linkedin.com/in/sasini-sandamali-bab7611a7/"
                  className="transition duration-500 ease-in-out group flex px-3.5 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-pink-700 rounded-full	"
                >
                  <FontAwesomeIcon
                    className="pr-0.5"
                    size="2x"
                    icon={["fab", "linkedin"]}
                  />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.behance.net/mssandamalibgss/"
                  className="transition duration-500 ease-in-out group flex px-2.5 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-pink-700 rounded-full	"
                >
                  <FontAwesomeIcon
                    className="pr-0.5"
                    size="2x"
                    icon={["fab", "behance"]}
                  />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://dribbble.com/Sasini-Sandamali"
                  className="transition duration-500 ease-in-out group flex px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-pink-700 rounded-full	"
                >
                  <FontAwesomeIcon
                    className="pr-0.5"
                    size="2x"
                    icon={["fab", "dribbble"]}
                  />
                </a>
              </div>
            </div>  
          </div>         
        </div>    
      </div>
      
    </section>
  );
}