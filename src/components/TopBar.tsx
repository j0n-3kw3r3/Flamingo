import { Moon, ScanBarcode, SearchNormal, Sun } from "iconsax-react";
import bg from "../assets/topbarflower.svg";
import flag from "../assets/flag.svg";
import { useState } from "react";

export function TopBar() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className=" top-0 bg-[#2F187E] z-0 shadow-md relative ">
      <div className="w-full h-full top-0 right-0 -z-10 left-0 absolute">
        <img src={bg} alt="" className="   h-full" />
      </div>

      <div className=" z-20 top-0 left-0 right-0 w-full flex justify-between p-3 px-6">
        <div className="flex items-center border rounded px-4 py-3 text-white w-[34.8125rem] ">
          <SearchNormal size={24} className="  size-4 " />
          <input type="search" placeholder="Search" className="ml-2 bg-transparent focus:outline-none flex-grow" />
          <ScanBarcode size={24} className=" cursor-pointer" />
        </div>
        <div className="flex  space-x-4">
          {/* darkmode toggle */}
          <div className="flex items-center text-white space-x-2">
            {darkMode ? (
              <Sun
                size={24}
                className="cursor-pointer hover:text-[#FFA3AB] transition-colors duration-200"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <Moon
                size={24}
                className="cursor-pointer hover:text-[#FFA3AB] transition-colors duration-200"
                onClick={() => setDarkMode(true)}
              />
            )}
          </div>
          <div className="flex items-center">
            <img src={flag} alt="" />
            <select className="p-2  rounded shadow ml-4 bg-transparent text-white outline-none  ">
              <option value="en" className=" text-black ">
                English
              </option>
              <option value="es" className=" text-black ">
                Spanish
              </option>
              {/* Add more languages here */}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
