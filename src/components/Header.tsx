"use client";

import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import Suggestion from "./Suggestion";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div 
          className="
            absolute 
            top-0
            left-0
            w-full
            h-96
            bg-gradient-to-br
            from-pink-400
            to-[#0055d1]
            rounded-md
            filter
            blur-3xl
            opacity-50
            -z-50
            "
        ></div>
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              placeholder="Search..."
              type="search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit"></button>
          </form>

          <Avatar name="salman sheriff" round size="50" color="#0055D1" />
        </div>

      </div>
      <Suggestion />
     
    </header>
  );
};

export default Header;
