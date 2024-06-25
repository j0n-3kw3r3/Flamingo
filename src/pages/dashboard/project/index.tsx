import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import OverviewTable from "@/components/overview";
import {
  Chart,
  Cup,
  ExportSquare,
  I3Dcube,
  Icon,
  Menu,
  Filter,
  MouseSquare,
} from "iconsax-react";
import PoolTable from "@/components/pool";

interface barDataProps {
  title: string;
  value: number | string;
  // icon: React.
  icon?: Icon;
  color?: string;
  size?: string;
}
const barData: barDataProps[] = [
  {
    title: "Total Successful Projects",
    value: 23,
    color: "#D62898",
    size: "20",
    icon: I3Dcube,
  },
  {
    title: "Liquidity Pool",
    value: 40,
    size: "24",
    color: "#D62898",
    icon: Chart,
  },
  {
    title: "Flund APY",
    value: "+30.31%",
    color: "#4cdd54",
    size: "24",
    icon: ExportSquare,
  },
  {
    title: "Total Minting Rewards",
    value: "$4,554,502",
    color: "#D62898",
    size: "24",
    icon: Cup,
  },
];
function Project() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="  space-y-4 overflow-y-none bg-[#2F187E] shadow-lg w-[15rem] relative ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <TopBar />
        <main className="p-4 overflow-auto">
          {/* Add your main content here */}

          <section className="gap-6 flex bg-transparent pb-4 w-full">
            {barData.map(
              ({ value, title, color, size, icon: IconComponent }) => (
                <div key={value} className="bg-white p-6 rounded-[8px] w-[50%]">
                  <p className="font-[400] text-base pb-2">{title}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[32px]">{value}</p>
                    {IconComponent && (
                      <IconComponent
                        size={size}
                        color={color}
                        fontWeight="bold"
                      />
                    )}
                  </div>
                </div>
              )
            )}
          </section>

          <section className="bg-white py-6 rounded-[8px] gap-[10px]">
            <div className="flex justify-between items-center px-6 pb-6">
              <h3 className="text-base font-medium">Tokens</h3>
              <div className="items-center gap-[40px] flex">
                <div className="rounded-[8px] border border-[#D9DADB] gap-[0px] px-4 py-2 flex items-center">
                  <Filter />
                  <select className="w-full pr-14 outline-none">
                    <option value="filter" className="rounded">
                      Filter
                    </option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#D62898] p-2 gap-2 rounded text-white">
                    <Menu />
                  </div>
                  <MouseSquare />
                </div>
              </div>
            </div>

            <PoolTable />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Project;
