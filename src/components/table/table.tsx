import { flexRender } from "@tanstack/react-table";

interface DataTableProps<TData> {
  data: TData[];
}

export default function Table<TData>({ table }: DataTableProps<TData> & { table: any }) {
  return (
    <div className=" overflow-auto">
    <table className="w-full ">
      <thead>
        {table.getHeaderGroups().map((headerGroup: any, index: number) => {
          return (
            <tr key={index} className="text-left bg-[#FFEFF9]  ">
              {headerGroup.headers.map((header: any) => (
                <th key={header.id} className="  py-[1.25rem]  px-6 text-xs font-normal ">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          );
        })}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row: any, index: number) => (
          <tr
            key={index}
            className="border-b last:border-b-0 cursor-pointer hover:bg-[#FFEFF9] ease-in-out duration-100 transition  "
          >
            {row.getVisibleCells().map((cell: any) => (
              <>
                <td key={cell.id} className="py-4  px-6 font-normal text-sm ">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
