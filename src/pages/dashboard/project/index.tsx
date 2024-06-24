import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import OverviewTable from "@/components/overview";


function Project() {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="  space-y-4 overflow-y-none bg-[#2F187E] shadow-lg w-[15rem] relative ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <TopBar />
        <main className="p-4 overflow-auto">
          <h1 className="text-2xl font-semibold">Project</h1>

          {/* Add your main content here */}
          <section>
            <OverviewTable />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Project;
