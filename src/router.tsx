import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/dashboard/overview";
import Project from "./pages/dashboard/project";
import Pool from "./pages/dashboard/pool";
import Learn from "./pages/dashboard/learn";
import Coach from "./pages/dashboard/coach";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common routes */}
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/project" element={<Project />} />
        <Route path="/dashboard/pool" element={<Pool />} />
        <Route path="/dashboard/learn" element={<Learn />} />
        <Route path="/dashboard/flamingo-coach" element={<Coach />} />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen">
              <div className="text-red-500 text-2xl text-center">Not Found</div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
