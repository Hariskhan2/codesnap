import React from "react";
import logo from "../image/logo_editor.webp";

const NavBar = ({ selectedFormat, setSelectedFormat, handleGenerateImage }) => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-wrap items-center justify-center">
            <img src={logo} className="h-16 rounded-lg" alt="Flowbite Logo" />
            <span className="text-2xl hidden md:block font-semibold whitespace-nowrap ml-4 dark:text-white">
              CodeSnap
            </span>
          </div>
          <div className="w-full md:w-auto flex items-center justify-center" id="navbar-default">
            <ul className="font-medium flex flex-col items-center justify-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <div className="">
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="py-2 px-4 border rounded-lg shadow-md"
                  >
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                    <option value="webp">WEBP</option>
                  </select>
                </div>
              </li>
              <li>
                <button
                  onClick={handleGenerateImage}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md"
                >
                  Generate Image
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
