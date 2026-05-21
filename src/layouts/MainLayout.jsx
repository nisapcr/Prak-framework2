import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    // 1. Ubah min-h-screen menjadi h-screen & w-screen, serta kunci lewat overflow-hidden
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      
      {/* Sidebar akan tetap diam karena tinggi induknya dikunci seukuran layar */}
      <Sidebar />

      {/* 2. Tambahkan h-full dan overflow-y-auto di bawah ini agar hanya area konten yang bisa di-scroll */}
      <div className="flex-1 h-full overflow-y-auto p-6">
        <Header />

        {/* Ini tempat halaman muncul */}
        <Outlet />
      </div>

    </div>
  );
}

export default MainLayout;