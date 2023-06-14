import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AddUser from "./pages/users/AddUser";
import AllUser from "./pages/users/AllUser";
import CustomShapeBarChart from "./pages/charts/CustomShapeBarChart";
import TwoLevelPieChart from "./pages/charts/TwoLevelPieChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users/addUser" element={<AddUser />} />
        <Route path="/users/allUser" element={<AllUser />} />
        <Route
          path="/charts/customShapeBarChart"
          element={<CustomShapeBarChart />}
        />
        <Route path="/charts/twoLevelPieChart" element={<TwoLevelPieChart />} />
      </Routes>
    </Router>
  );
}
export default App;
