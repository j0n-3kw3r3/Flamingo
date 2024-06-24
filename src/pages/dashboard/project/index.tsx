import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import OverviewTable from "@/components/overview";
import { Chart, Cup, ExportSquare, I3Dcube, Icon, Man } from "iconsax-react";

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

          <section>
            <h3 className="text-base">Tokens</h3>
            
            <OverviewTable />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Project;
