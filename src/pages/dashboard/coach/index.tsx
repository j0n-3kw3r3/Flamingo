import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

function Coach() {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopBar />
        <main className="p-4 overflow-auto">
          <h1 className="text-2xl font-semibold">Flamingo Coach</h1>
          {/* Add your main content here */}
        </main>
      </div>
    </div>
  );
}

export default Coach;