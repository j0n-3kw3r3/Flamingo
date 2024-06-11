import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { useState } from "react";
import flg from "../../../assets/fundvolumeflamingo.svg";
import DashboardChart from "@/components/chart/dashboard";
import OverviewTable from "@/components/overview";
import { useNavigate } from "react-router-dom";
import { articles } from "@/assets/dummy-data";
import { InfoCircle } from "iconsax-react";

function Overview() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [rate] = useState(66776.8);

  const handleFromCurrencyChange = (event: any) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event: any) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event: any) => {
    const value = event.target.value;
    setAmount(value);
  };

  const convert = () => {
    // Replace with your conversion logic using an API or library
    const converted = amount * rate;
    const floored = Math.floor(converted * 100) / 100;
    setConvertedAmount(floored);
  };

  const aboutData = [
    {
      title: "Hash",
      sub: "0xcd48b16....803b9a720",
      url: "#",
    },
    {
      title: "Whitepaper",
      sub: "flamingo-1.gitbook.io/user-guide/v/master/",
      url: "#",
    },
    {
      title: "Market Cap",
      sub: "$0.000000",
      url: "#",
    },
    {
      title: "Token Price",
      sub: "$0.0892",
      url: "#",
    },
    {
      title: "Total Supply",
      sub: "-",
      url: "#",
    },
    {
      title: "Circulating Supply",
      sub: "-",
      url: "#",
    },
    // More aboutData...
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-[#FBFBFB">
      <div className="  space-y-4 overflow-y-none bg-[#2F187E] shadow-lg w-[15rem] relative ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow relative  ">
        <TopBar />

        <main className="grid h-screen overflow-y-auto grid-cols-12 gap-4 p-4">
          <section className="col-span-5 rounded ">
            <div className="grid grid-cols-2 gap-[.0625rem]">
              <div className="bg-gradient-to-r from-[#30187ee4] to-[#D62898] text-white shadow rounded-tl-lg p-6">
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

          <section className="bg-[#2F187E] shadow col-span-7 h-[20rem] rounded-lg p-4">
            <DashboardChart />
          </section>

          <section
            className={
              activeTab !== "overview" && activeTab !== "about"
                ? "bg-white shadow rounded p-4 col-span-8"
                : "bg-white shadow rounded p-4 col-span-12"
            }
          >
            <div className="mb-4 flex justify-between ">
              <div
                className={`px-4 py-2 ${
                  activeTab === "overview"
                    ? "text-[#D62898] cursor-pointer border-b-[#D62898] border-b "
                    : " cursor-pointer text-[#7F7F7F]"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </div>
              <div
                className={`px-4 py-2 ${
                  activeTab === "pool"
                    ? "text-[#D62898] cursor-pointer border-b-[#D62898] border-b "
                    : " cursor-pointer text-[#7F7F7F]"
                }`}
                onClick={() => setActiveTab("pool")}
              >
                Pool
              </div>
              <div
                className={`px-4 py-2 ${
                  activeTab === "about"
                    ? "text-[#D62898] cursor-pointer border-b-[#D62898] border-b "
                    : " cursor-pointer text-[#7F7F7F]"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </div>
              <div
                className={`px-4 py-2 ${
                  activeTab === "articles"
                    ? "text-[#D62898] cursor-pointer border-b-[#D62898] border-b "
                    : " cursor-pointer text-[#7F7F7F]"
                }`}
                onClick={() => setActiveTab("articles")}
              >
                Articles
              </div>
            </div>

            {activeTab === "overview" && (
              <div className=" overflow-x-auto w-[100%] ">
                <OverviewTable />
              </div>
            )}
            {activeTab === "pool" && (
              <div className=" overflow-x-auto w-[100%] ">
                <OverviewTable />
              </div>
            )}
            {activeTab === "about" && (
              <div>
                {aboutData.map((data, index) => (
                  <div
                    key={index}
                    className="flex justify-between cursor-pointer border rounded mb-2 p-2 text-xs"
                    onClick={() => {
                      navigate(`/dashboard/overview/${data.url}`);
                    }}
                  >
                    <h2 className=" flex items-center gap-1 text-[#928B8B] ">
                      {data.title}
                      <InfoCircle className="size-2" />
                    </h2>
                    <p className=" ">{data.sub}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "articles" && (
              <div className=" h-[22.25rem] overflow-y-auto px-2 ">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="flex gap-[.625rem] border border-[#B2AFAF] rounded items-center mb-2 p-2 cursor-pointer "
                    onClick={() => {
                      navigate(`/dashboard/overview/${article.url}`);
                    }}
                  >
                    <img src={article.image} alt={article.title} className=" w-16 h-16" />
                    <div className=" flex flex-col gap-1 text[#B2AFAF]">
                      <h2>{article.title}</h2>
                      <div className="flex gap-2 text-xs ">
                        <p>{article.author}</p>
                        <span>•</span>
                        <p>{article.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {activeTab !== "overview" && activeTab !== "about" && (
            <section className="bg-[#2F187E] shadow h-fit rounded-lg p-6 text-white text-sm col-span-4">
              <h1 className="  font-normal mb-4">Conversion Calculator</h1>
              <div className="flex flex-col gap-6">
                <div className="">
                  <label className="block mb-2  text-sm " htmlFor="from">
                    From
                  </label>
                  <div className="flex gap-1  ">
                    <input
                      id="amount"
                      type="number"
                      onChange={handleAmountChange}
                      className="w-1/2 block px-3 py-2 border-[#D62898] border bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <select
                      id="from"
                      value={fromCurrency}
                      onChange={handleFromCurrencyChange}
                      className="block w-1/2 px-3 py-2 border-[#D62898] border bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="USD">US Dollar (USD)</option>
                      {/* Add more currency options here */}
                    </select>
                  </div>
                </div>
                <div className=" ">
                  <label className="block mb-2  text-sm " htmlFor="to">
                    To
                  </label>
                  <div className="flex gap-1 ">
                    <div className="w-1/2 block px-3 py-2 border-[#D62898] border bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500">
                      {convertedAmount}
                    </div>
                    <select
                      id="to"
                      value={toCurrency}
                      onChange={handleToCurrencyChange}
                      className="block w-1/2 px-3 py-2 border-[#D62898] border bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <option className="bg-transparent " value="BTC">
                        Bitcoin (BTC)
                      </option>
                      <option className="bg-transparent " value="ETH">
                        Ethereum (ETH)
                      </option>
                      <option className="bg-transparent " value="USD">
                        US Dollar (USD)
                      </option>
                      {/* Add more currency options here */}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-[5rem] my-4">
                <button
                  onClick={convert}
                  className="px-4 py-2 bg-gradient-to-r from-[#d6289954] to-[#D62898]  w-full text-white  rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Exchange
                </button>
              </div>
              <div className="flex justify-between ">
                <div className=" text-sm ">Exchange Rate</div>
                <div className=" text-white">{rate}</div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Overview;
