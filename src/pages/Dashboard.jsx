import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  const [selected, setSelected] = useState(null);

  const handleCardClick = (title, value, color) => {
    setSelected({ title, value, color });
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div className=" bg-gray-50 p-4 md:p-8">
      <PageHeader
        title="Dashboard"
        breadcrumb={["Home", "Dashboard"]}
      >
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm active:scale-95">
          + Add Order
        </button>
      </PageHeader>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        
        {/* Total Orders */}
        <div onClick={() => handleCardClick("Total Orders", 75, "blue")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <FaShoppingCart size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Orders</p>
            <h3 className="font-bold text-2xl text-gray-800">75</h3>
          </div>
        </div>

        {/* Total Delivered */}
        <div onClick={() => handleCardClick("Total Delivered", 175, "emerald")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <FaTruck size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Delivered</p>
            <h3 className="font-bold text-2xl text-gray-800">175</h3>
          </div>
        </div>

        {/* Total Canceled */}
        <div onClick={() => handleCardClick("Total Canceled", 40, "rose")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
          <div className="p-4 bg-rose-50 text-rose-600 rounded-xl group-hover:bg-rose-600 group-hover:text-white transition-colors">
            <FaBan size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Canceled</p>
            <h3 className="font-bold text-2xl text-gray-800">40</h3>
          </div>
        </div>

        {/* Total Revenue */}
        <div onClick={() => handleCardClick("Total Revenue", "Rp 128.000.000", "amber")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
          <div className="p-4 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <FaDollarSign size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
            <h3 className="font-bold text-2xl text-gray-800 text-nowrap text-ellipsis overflow-hidden">Rp 128M</h3>
          </div>
        </div>
      </div>

      {/* MODAL DETAIL */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}>
          <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200 text-center"
            onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
               <div className="text-gray-400 text-3xl">ℹ️</div>
            </div>
            <h2 className="text-gray-500 font-medium uppercase tracking-widest text-xs mb-1">{selected.title}</h2>
            <p className="text-4xl font-black text-gray-900 mb-6">{selected.value}</p>
            <button 
              className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-semibold transition-colors"
              onClick={closeModal}
            >
              Close Detail
            </button>
          </div>
        </div>
      )}
    </div>
  );
}