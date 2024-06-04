import {BrowserRouter, Routes, Route} from "react-router-dom";
import Overview from "./components/pages/dashboard/ovevriew";
import Project from "./components/pages/dashboard/project";
import Pool from "./components/pages/dashboard/pool";
import Coach from "./components/pages/dashboard/coach";
import Learn from "./components/pages/dashboard/learn";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common routes */}
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/project" element={<Project />} />
        <Route path="/dashboard/pool" element={<Pool />} />
        <Route path="/dashboard/learn" element={<Learn />} />
        <Route path="/dashboard/coach" element={<Coach />} />
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
