import { FaHome, FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // 1. Definisikan fungsi menuClass sesuai arahan gambar
  // Fungsi ini menerima object { isActive } otomatis dari NavLink
  const menuClass = ({ isActive }) => `
    flex items-center gap-4 px-5 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 font-bold
    ${isActive
      ? "text-hijau bg-green-200 font-extrabold"
      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }
  `;

  const menu = [
    { name: "Dashboard", icon: <FaHome />, to: "/" },
    { name: "Orders", icon: <FaShoppingCart />, to: "/orders" },
    { name: "Customers", icon: <FaUsers />, to: "/customers" },
    { name: "Error 400", icon: <FaHome />, to: "/400" },
    { name: "Error 401", icon: <FaHome />, to: "/401" },
    { name: "Error 403", icon: <FaHome />, to: "/403" },
  ];

  return (
    <div className="w-72 h-screen overflow-hidden bg-white p-7 flex flex-col justify-between border-r border-slate-100 shadow-sm">
      <div>
        {/* LOGO */}
        <div className="mb-10 px-2">
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Sedap<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mt-1">
            Modern Admin Dashboard
          </p>
        </div>

        {/* NAVIGATION */}
        <nav>
          <ul className="space-y-2.5">
            {menu.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={menuClass} 
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="tracking-wide">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* FOOTER AREA (PROMO BOX & COPYRIGHT) */}
      <div className="flex-none">
        <div className="bg-gradient-to-br from-emerald-400 to-green-500 rounded-[2rem] p-6 text-white shadow-xl shadow-emerald-100 relative overflow-hidden mb-8">
          {/* DECORATION BLUR */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>

          <p className="text-sm mb-5 font-bold leading-relaxed relative z-10">
            Please organize your menus through button below!
          </p>

          <div className="flex items-center justify-between relative z-10">
            <button className="bg-white text-emerald-600 px-4 py-2.5 rounded-xl flex items-center gap-2 font-black text-xs hover:bg-emerald-50 transition-all active:scale-95 shadow-md">
              <FaPlus />
              Add Menus
            </button>
            <img
              src="https://i.pravatar.cc/100"
              className="w-10 h-10 rounded-xl border-2 border-white/50 shadow-lg"
              alt="avatar"
            />
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="px-2">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
            Sedap Restaurant Admin Dashboard
          </p>
          <p className="text-[10px] font-medium text-slate-300 mt-0.5">
            © 2026 All Right Reserved
          </p>
        </div>
      </div>
    </div>


  );
}
