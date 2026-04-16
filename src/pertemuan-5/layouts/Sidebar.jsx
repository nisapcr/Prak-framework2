import { FaHome, FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Orders", icon: <FaShoppingCart /> },
    { name: "Customers", icon: <FaUsers /> },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-white to-slate-50 p-6 flex flex-col justify-between min-h-screen border-r shadow-sm">

      {/* LOGO */}
      <div>
        <h1 className="text-4xl font-bold mb-1">
          Sedap<span className="text-emerald-500">.</span>
        </h1>
        <p className="text-slate-400 text-sm mb-8">
          Modern Admin Dashboard 
        </p>

        {/* MENU */}
        <ul className="space-y-3">
          {menu.map((item) => (
            <li
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-medium
                ${
                  active === item.name
                    ? "bg-emerald-500 text-white shadow-md"
                    : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER CARD */}
      <div>
        <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">

          {/* DECORATION BLUR */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>

          <p className="text-sm mb-4 font-medium">
            Please organize your menus through button below!
          </p>

          <div className="flex items-center justify-between">
            {/* BUTTON */}
            <button className="bg-white text-emerald-600 px-3 py-2 rounded-lg flex items-center gap-2 font-semibold hover:scale-105 transition">
              <FaPlus />
              Add Menus
            </button>

            {/* AVATAR */}
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              alt="icon"
            />
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-xs text-slate-400 mt-6">
          Sedap Restaurant Admin Dashboard
        </p>
        <p className="text-xs text-slate-400">
          © 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}