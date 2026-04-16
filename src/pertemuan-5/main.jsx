import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/tailwind.css";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <Header />
        <Dashboard />
      </div>
    </div>
  </React.StrictMode>
);