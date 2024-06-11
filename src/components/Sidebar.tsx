import { Book, Category2, Chart, I3Dcube, ShieldTick } from "iconsax-react";
import logo from "../assets/logo.svg";
import top from "../assets/sidebartop.svg";
import mid from "../assets/sidebarmid.svg";
import { useLocation } from "react-router-dom";
import down from "../assets/sidebardown.svg";
import { Link } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="p-4 pl-0 space-y-4 overflow-y-none bg-[#2F187E] shadow-md w-[15rem] ">
      <div
        className="w-full h-full absolute -z-100
       "
      >
        <img src={top} alt="Flamingo Logo" className=" absolute -z-500 top-0  right-0" />
        <img src={mid} alt="Flamingo Logo" className=" absolute -z-500  top-[15.375rem] left-0 right-0" />
        <img src={down} alt="Flamingo Logo" className=" absolute -z-500 bottom-0 left-0 right-0" />
      </div>
      <div className="flex items-center space-x-2 mt-6 mb-10 ml-8">
        <img src={logo} alt="Flamingo Logo" className=" cursor-pointer" />
      </div>
      <nav className="space-y-2 text-white z-100 absolute">
        <Link
          to="/dashboard/overview"
          className={`px-4 py-4 rounded-r-full pl-8 flex gap-4 hover:text-[#FFA3AB]  ${
            path.includes("/dashboard/overview") ? "bg-gradient-to-r from-[#d6289954] to-[#D62898] text-[#FFA3AB]" : ""
          }`}
        >
          <Category2 className="size-6" />
          Overview
        </Link>
        <Link
          to="/dashboard/project"
          className={`px-4 py-4 rounded-r-full pl-8 flex gap-4 hover:text-[#FFA3AB]  ${
            path.includes("/dashboard/project") ? "bg-gradient-to-r from-[#d6289954] to-[#D62898] text-[#FFA3AB]" : ""
          }`}
        >
          <I3Dcube className="size-6" />
          Project
        </Link>
        <Link
          to="/dashboard/pool"
          className={`px-4 py-4 rounded-r-full pl-8 flex gap-4 hover:text-[#FFA3AB]  ${
            path.includes("/dashboard/pool") ? "bg-gradient-to-r from-[#d6289954] to-[#D62898] text-[#FFA3AB]" : ""
          }`}
        >
          <Chart className="size-6" />
          Pool
        </Link>
        <Link
          to="/dashboard/learn"
          className={`px-4 py-4 rounded-r-full pl-8 flex gap-4 hover:text-[#FFA3AB]  ${
            path.includes("/dashboard/learn") ? "bg-gradient-to-r from-[#d6289954] to-[#D62898] text-[#FFA3AB]" : ""
          }`}
        >
          <Book className="size-6" />
          Learn
        </Link>
        <Link
          to="/dashboard/flamingo-coach"
          className={`px-4 py-4 rounded-r-full pl-8 flex gap-4 hover:text-[#FFA3AB]  ${
            path.includes("/dashboard/flamingo-coach")
              ? "bg-gradient-to-r from-[#d6289954] to-[#D62898] text-[#FFA3AB]"
              : ""
          }`}
        >
          <ShieldTick className="size-6" />
          Flamingo Coach
        </Link>
      </nav>
      {/* Add more sidebar items here if needed */}
    </aside>
  );
}
