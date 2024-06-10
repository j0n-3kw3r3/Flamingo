import { formatter } from "@/utils/formatter";
import { ColumnDef } from "@tanstack/react-table";
import { Heart } from "iconsax-react";
import { useState } from "react";
import kmd from "/node_modules/cryptocurrency-icons/svg/color/kmd.svg";
import btc from "/node_modules/cryptocurrency-icons/svg/color/btc.svg";
import eth from "/node_modules/cryptocurrency-icons/svg/color/eth.svg";
import ltc from "/node_modules/cryptocurrency-icons/svg/color/ltc.svg";
import doge from "/node_modules/cryptocurrency-icons/svg/color/doge.svg";
import bcc from "/node_modules/cryptocurrency-icons/svg/color/bcc.svg";

export type Currency = {
  rank: number;
  name: string;
  price: number;
  marketCap: number;
  volume24Hrs: number;
  volumeAmt: number;
  liquidity: number;
};

export const columns: ColumnDef<Currency>[] = [
  {
    header: "Actions",
    cell: () => {
      const [isFilled, setIsFilled] = useState(false);

      const handleClick = () => {
        setIsFilled(!isFilled);
      };

      return (
        <button onClick={handleClick}>
          <Heart className={`size-4 ${isFilled ? "fill-[#ec0619]" : ""}`} color="#ec0619" />
        </button>
      );
    },
  },
  { header: "Rank", accessorKey: "rank" },
  {
    header: "Name",
    accessorKey: "name",
    cell: (info: any) => {
      const coin = info.getValue();
      let image;

      switch (coin) {
        case "Bitcoin":
          image = btc;
          break;
        case "Litecoin":
          image = ltc;
          break;
        case "Ethereum":
          image = eth;
          break;
        case "Dogecoin":
          image = doge;
          break;
        case "Binance Coin":
          image = bcc;
          break;
        default:
          image = kmd;
          break;
      }

      return (
        <div className=" flex gap-2 items-center ">
          <img src={image} alt="" className=" w-8 h-8" />
          <div className="text-xs">{coin}</div>
        </div>
      );
    },
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: (info) => {
      if (info.getValue() !== "" && info.getValue() !== null) {
        return formatter.format(info?.getValue() as number);
      }
      return;
    },
  },
  {
    header: "Market Cap",
    accessorKey: "marketCap",
    cell: (info) => {
      if (info.getValue() !== "" && info.getValue() !== null) {
        return formatter.format(info?.getValue() as number);
      }
      return;
    },
  },
  {
    header: "Volume (24hrs)",
    accessorKey: "volume24Hrs",
    cell: (info) => {
      if (info.getValue() !== "" && info.getValue() !== null) {
        return formatter.format(info?.getValue() as number);
      }
      return;
    },
  },
  {
    header: "Volume (AMT)",
    accessorKey: "volumeAmt",
    cell: (info) => {
      if (info.getValue() !== "" && info.getValue() !== null) {
        return formatter.format(info?.getValue() as number);
      }
      return;
    },
  },
  {
    header: "Liquidity",
    accessorKey: "liquidity",
    cell: (info) => {
      if (info.getValue() !== "" && info.getValue() !== null) {
        return <>{info?.getValue()}M</>;
      }
      return;
    },
  },
];
