"use client"

import React, { useState } from "react";

const Sidebar: React.FC = React.memo(() => {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div
      className={`Sidebar bg-yellow-500 text-white h-full flex flex-col justify-between p-4 items-center text-center z-50 w-full md:w-64 md:fixed md:top-0 md:left-0 md:h-screen md:transition-all md:duration-300 md:ease-in-out ${
        showMenu ? "active md:w-64" : "md:w-16"
      }`}
    >
      <div>
        <h1 className="flex items-center justify-center space-x-2 text-xl text-center py-8 text-2xl font-circular-bold">
          <span className="text-2xl">₿</span>
          <span>BIBUAIN</span>
        </h1>
        <span
          onClick={toggleMenu}
          className="block text-white font-circular-normal hover:text-blue-700 cursor-pointer"
        >
          Dashboard
        </span>
        <span className="block mt-2 text-white font-circular-normal hover:text-blue-700 cursor-pointer">
          Coin Exchange
        </span>
        <span className="block mt-2 text-white font-circular-normal hover:text-blue-700 cursor-pointer">
          Bank Management
        </span>
        <span className="block mt-2 text-white font-circular-normal hover:text-blue-700 cursor-pointer">
          Inbox
        </span>
        <span className="block mt-2 text-white font-circular-normal hover:text-blue-700 cursor-pointer">
          Settings
        </span>
      </div>
      <span className="text-8xl">₿</span>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
