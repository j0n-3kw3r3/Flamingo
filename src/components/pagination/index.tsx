export function Pagination(props: any) {
  return (
    <div className="flex flex-col items-center my-6">
      <div className="flex">
        <div
          className="px-3 py-1 border rounded-l-md cursor-pointer hover:bg-[#D62898] hover:text-white"
          onClick={() => {
            if (props.tableData.getCanPreviousPage()) {
              props.tableData.previousPage();
            }
          }}
        >
          Prev
        </div>
        {[...Array(props.tableData.getPageCount())].map((_, i) => (
          <a
            key={i}
            className={`px-3 py-1 border-t border-b cursor-pointer ${
              i === props.tableData.getState().pagination.pageIndex ? "bg-[#D62898] text-white" : ""
            }`}
            onClick={() => {
              props.tableData.setPageIndex(i);
            }}
          >
            {i + 1}
          </a>
        ))}
        <button
          className="px-3 py-1 border rounded-r-md cursor-pointer hover:bg-[#D62898] hover:text-white"
          onClick={() => {
            if (props.tableData.getCanNextPage()) {
              props.tableData.nextPage();
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
