import { Sidebar } from "../../../Sidebar";

function Overview() {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <header className="p-4 bg-white shadow-md flex justify-between items-center">
          <input type="search" placeholder="Search" className="border rounded p-2 flex-grow" />
          <button className="p-2 ml-2">Toggle Dark Mode</button>
          <select className="p-2 ml-2">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            {/* Add more languages here */}
          </select>
        </header>
        <main className="p-4 overflow-auto">
          <h1 className="text-2xl font-semibold">Main Content</h1>
          {/* Add your main content here */}
        </main>
      </div>
    </div>
  );
}

export default Overview;
