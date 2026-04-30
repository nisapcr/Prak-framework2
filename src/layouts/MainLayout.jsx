import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <Header />

        {/* Ini tempat halaman muncul */}
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;