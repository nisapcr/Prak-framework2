
import { FaHome, FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="w-64 bg-white p-6 flex flex-col justify-between min-h-screen border-r">

            {/* Logo */}
            <div>
                
<h1 className="text-4xl font-bold font-[Poppins] mb-1">
    Sedap<span className="text-green-500">.</span>
</h1>
        <p className="text-gray-400 text-sm mb-8">Modern Admin Dashboard</p>

        {/* Menu */}
        <ul className="space-y-4">
          <li className="flex items-center gap-3 font-semibold text-black cursor-pointer">
            <FaHome />
            Dashboard
          </li>

          <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
            <FaShoppingCart />
            Orders
          </li>

          <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
            <FaUsers />
            Customers
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div>
        
        <div className="bg-green-500 rounded-xl p-4 mt-3 text-white">
          {/* 🔥 PINDAH TEKS KE DALAM CARD */}
          <p className="text-sm mb-3">
            Please organize your menus through button below!
          </p>

          <div className="flex items-center justify-between">
            {/* BUTTON PUTIH */}
            <button className="bg-white text-green-600 px-3 py-2 rounded-md flex items-center gap-2 font-semibold">
              <FaPlus />
              Add Menus
            </button>

            {/* ICON KANAN */}
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="icon"
            />
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Sedap Restaurant Admin Dashboard
        </p>
        <p className="text-xs text-gray-400">© 2025 All Right Reserved</p>
      </div>
    </div>
  );
}