import React from "react";
import { Settings, User } from 'lucide-react';

function HeaderBar() {
  return (
    <>
      <header className="bg-gray-900 flex items-center justify-between fixed left-0 top-0 px-8 w-full h-16 text-white z-50 shadow-md">
        {/* Toggle button for Sidebar */}
      <div className="flex">
        <div className="text-3xl font-bold ">ABOX</div>
      </div>
        <input
          className="w-64 bg-gray-700 text-white px-4 py-1 rounded outline-nones placeholder:text-gray-400"
          placeholder="search box"
          type="search"
        />
        <div className="flex items-center gap-4">
            <button className="hover:text-gray-600 cursor-pointer">
                <Settings className="w-5 h-5"/>
            </button>
            <button className="hover:text-gray-600 cursor-pointer">
                <User className="w-5 h-5"/>
            </button>
        </div>
      </header>
    </>
  );
}

export default HeaderBar;
