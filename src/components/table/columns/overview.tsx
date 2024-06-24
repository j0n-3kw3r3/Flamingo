import { formatter } from "@/utils/formatter";
import { ColumnDef } from "@tanstack/react-table";
import { Heart } from "iconsax-react";
import { useState } from "react";

export type Currency = {
  rank: number;
  name: string;
  symbol: string;
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
    header: "",
    accessorKey: "symbol",
    cell: (info: any) => {
      const coin = info.getValue();
      const Icons = `../../../node_modules/cryptocurrency-icons/svg/color/${coin.toLowerCase()}.svg`;

      return (
        <div className="items-center w-8 h-8 -mr-10">
          <img src={Icons} alt="" className=" w-8 h-8" />
        </div>
      );
    },
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: (info: any) => {
      const coin = info.getValue();

      return (
        <div className=" flex gap-2 items-center ">
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
