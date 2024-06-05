import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { useState } from "react";
import flg from "../../../assets/fundvolumeflamingo.svg";

function Overview() {
  const [activeTab, setActiveTab] = useState("overview");
  const [inputValue, setInputValue] = useState(0);
  const [conversionRate, setConversionRate] = useState(1489);
  const [convertedValue, setConvertedValue] = useState(0);
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = (event:any) => {
    setCurrency(event.target.value);
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);
    setConvertedValue(value * conversionRate);
  };

  const handleRateChange = (event: any) => {
    setConversionRate(event.target.value);
    setConvertedValue(inputValue * event.target.value);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-[#FBFBFB">
      <Sidebar />
      <div className="flex flex-col flex-grow relative  ">
        <TopBar />

        <main className="grid h-screen overflow-y-auto grid-cols-12 gap-4 p-4">
          <section className=" shadow col-span-5 rounded ">
            <div className="grid grid-cols-2 gap-[.0625rem]">
              <div className="bg-[#D62898] text-white shadow rounded-tl-lg p-6">
                <h3 className=" text-xs ">FLM Market Cap</h3>
                <p className="text-xl mb-4 mt-6 ">$43,000,345.60</p>
                <div className="flex gap-14">
                  <span className="">$0.026</span>
                  <span className="text-green-500">+22%</span>
                </div>
              </div>
              <div className="bg-[#212027] text-white shadow rounded-tr-lg p-6">
                <h3 className=" text-xs ">Total Locked Value</h3>
                <p className="text-xl mb-4 mt-6 text-green ">$35,676,345.64</p>
                <div className="flex gap-14">
                  <span className="text-[#958F8F]">Yield Farming Pools</span>
                </div>
              </div>
              <div className="bg-[#2F187E] text-white shadow rounded-bl-lg p-6">
                <h3 className=" text-xs ">Total Locked Value</h3>
                <p className="text-xl mb-4 mt-6 text-green ">$301,175.634</p>
                <div className="flex gap-14">
                  <span className="text-[#958F8F]">Reverse Pool Farming</span>
                </div>
              </div>
              <div className="bg-[#FFEFF9] text-black shadow rounded-br-lg p-6 relative ">
                <img src={flg} alt="" className="absolute top-0 right-0  h-full" />
                <div className="absolute">
                  <h3 className=" text-xs ">Flund Volume</h3>
                  <p className="text-xl mb-4 mt-6 text-green ">$4,567,889.567</p>
                  <div className="flex gap-2">
                    <span className="text-[#958F8F]">APY</span>
                    <span className="text-green-500">+22.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white shadow col-span-7 rounded p-4">
            <h2 className="text-2xl font-bold mb-2">Section 2</h2>
            <section className="bg-white shadow rounded p-4 col-span-8"></section>
          </section>

          <section className="bg-white shadow rounded p-4 col-span-8">
            <div className="mb-4 flex justify-between ">
              <div
                className={`px-4 py-2 ${
                  activeTab === "overview" ? "text-[#D62898] cursor-pointer" : " cursor-pointer text-[#7F7F7F]"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </div>
              <div
                className={`px-4 py-2 ${
                  activeTab === "pool" ? "text-[#D62898] cursor-pointer" : " cursor-pointer text-[#7F7F7F]"
                }`}
                onClick={() => setActiveTab("pool")}
              >
                Pool
              </div>
              <div
                className={`px-4 py-2 ${
                  activeTab === "analytics" ? "text-[#D62898] cursor-pointer" : " cursor-pointer text-[#7F7F7F]"
                }`}
                onClick={() => setActiveTab("analytics")}
              >
                Analytics
              </div>
              <div
                className={`px-4 py-2 ${
                  activeTab === "about" ? "text-[#D62898] cursor-pointer" : " cursor-pointer text-[#7F7F7F]"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </div>
            </div>

            {activeTab === "overview" && <div>Overview Content</div>}
            {activeTab === "pool" && <div>Pool Content</div>}
            {activeTab === "analytics" && <div>Analytics Content</div>}
            {activeTab === "about" && <div>About Content</div>}
          </section>

          <section className="bg-white shadow rounded p-4 col-span-4">
            <h2 className="text-2xl font-bold mb-2">Conversion Calculator</h2>

            <div className="flex flex-col  space-y-4">
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="border rounded p-2"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />

                <select value={currency} onChange={handleCurrencyChange} className="border rounded p-2">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <input
                type="number"
                className="border rounded p-2"
                value={conversionRate}
                onChange={handleRateChange}
                placeholder="Enter conversion rate"
              />
            </div>

            <div className="mt-2">Converted Value: {convertedValue}</div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Overview;
