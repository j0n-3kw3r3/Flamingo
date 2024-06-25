import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { poolColumns } from "../table/columns/overview";
import { Pagination } from "../pagination";
import { Cryptodata } from "@/assets/dummy-data";
import Table from "../table/table";

function PoolTable() {
  const data = useMemo(() => Cryptodata, []);

  const table = useReactTable({
    data,
    columns: poolColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), //load client-side pagination code
  });

  return (
    <div>
      {table && (
        <>
          <Table table={table} data={[]} />
          <Pagination tableData={table} />
        </>
      )}
    </div>
  );
}

export default PoolTable;
