import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaUsers, FaAward } from "react-icons/fa";
import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Dashboard({ customers = [], orders = [] }) {
  const [selected, setSelected] = useState(null);

  // ==================== ENGINE KALKULASI CRM REAL-TIME ====================
  // 1. Metrik Utama Orders
  const totalOrders = orders.length;
  const totalDelivered = orders.filter((o) => o.status === "Completed").length;
  const totalCanceled = orders.filter((o) => o.status === "Cancelled").length;

  // 2. Metrik Pendapatan (Revenue) dari Order Berstatus 'Completed'
  const totalRevenue = orders
    .filter((o) => o.status === "Completed")
    .reduce((acc, o) => acc + (Number(o.totalPrice) || 0), 0);

  // Helper format mata uang Rupiah untuk keindahan UI
  const formatIDR = (amount) => {
    return amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });
  };

  // Shortener format rupiah untuk card (Contoh: Rp 128.500.000 menjadi Rp 128,5M)
  const formatShortIDR = (amount) => {
    if (amount >= 1000000000) return `Rp ${(amount / 1000000000).toFixed(1)}M`;
    if (amount >= 1000000) return `Rp ${(amount / 1000000).toFixed(1)}Jt`;
    return formatIDR(amount);
  };

  // 3. Metrik Utama Customer & Poin Pool
  const totalCustomers = customers.length;
  const totalPointsPool = customers.reduce((acc, c) => acc + (c.points || 0), 0);

  // 4. Penghitung Distribusi Tier Loyalty
  const platinumCount = customers.filter((c) => c.loyalty === "Platinum").length;
  const goldCount = customers.filter((c) => c.loyalty === "Gold").length;
  const silverCount = customers.filter((c) => c.loyalty === "Silver").length;
  const bronzeCount = customers.filter((c) => c.loyalty === "Bronze").length;
  // =========================================================================

  const handleCardClick = (title, value, color) => {
    setSelected({ title, value, color });
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div className="bg-gray-50 p-4 md:p-8 min-h-screen">
      <PageHeader title="Dashboard" breadcrumb={["Home", "Dashboard"]}>
        <div className="text-sm bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-semibold border border-indigo-100 shadow-sm">
          🌟 Live CRM Mode
        </div>
      </PageHeader>

      {/* SECTION 1: CORE TRANSACTION CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Total Orders */}
        <div
          onClick={() => handleCardClick("Total Orders", totalOrders, "blue")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
        >
          <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <FaShoppingCart size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Orders</p>
            <h3 className="font-bold text-2xl text-gray-800">{totalOrders}</h3>
          </div>
        </div>

        {/* Total Delivered / Completed */}
        <div
          onClick={() => handleCardClick("Total Delivered", totalDelivered, "emerald")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
        >
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <FaTruck size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Completed</p>
            <h3 className="font-bold text-2xl text-gray-800">{totalDelivered}</h3>
          </div>
        </div>

        {/* Total Canceled */}
        <div
          onClick={() => handleCardClick("Total Canceled", totalCanceled, "rose")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
        >
          <div className="p-4 bg-rose-50 text-rose-600 rounded-xl group-hover:bg-rose-600 group-hover:text-white transition-colors">
            <FaBan size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Canceled</p>
            <h3 className="font-bold text-2xl text-gray-800">{totalCanceled}</h3>
          </div>
        </div>

        {/* Total Revenue */}
        <div
          onClick={() => handleCardClick("Total Revenue", formatIDR(totalRevenue), "amber")}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
        >
          <div className="p-4 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <FaDollarSign size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
            <h3 className="font-bold text-2xl text-gray-800 text-nowrap text-ellipsis overflow-hidden">
              {formatShortIDR(totalRevenue)}
            </h3>
          </div>
        </div>
      </div>

      {/* SECTION 2: CRM POOL STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl">
            <FaUsers size={24} />
          </div>
          <div>
            <span className="text-sm text-gray-400 font-medium block">Total CRM Registered Members</span>
            <h3 className="text-3xl font-black text-gray-800 mt-0.5">{totalCustomers} <span className="text-sm font-normal text-gray-400">Users</span></h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-xl">
            <FaAward size={24} />
          </div>
          <div>
            <span className="text-sm text-gray-400 font-medium block">Circulating Member Points Pool</span>
            <h3 className="text-3xl font-black text-purple-600 mt-0.5">{totalPointsPool.toLocaleString("id-ID")} <span className="text-sm font-normal text-gray-400">Pts</span></h3>
          </div>
        </div>
      </div>

      {/* SECTION 3: TIER DISTRIBUTION ANALYSIS */}
      <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-base font-bold text-gray-800 tracking-wide uppercase mb-4">Loyalty Tier Segmentation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
            <span className="text-xs font-bold text-purple-600 uppercase block tracking-wider">Platinum (600+)</span>
            <p className="text-3xl font-black text-purple-700 mt-1">{platinumCount}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-center">
            <span className="text-xs font-bold text-yellow-600 uppercase block tracking-wider">Gold (300+)</span>
            <p className="text-3xl font-black text-yellow-700 mt-1">{goldCount}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase block tracking-wider">Silver (100+)</span>
            <p className="text-3xl font-black text-slate-700 mt-1">{silverCount}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-center">
            <span className="text-xs font-bold text-orange-600 uppercase block tracking-wider">Bronze (&lt;100)</span>
            <p className="text-3xl font-black text-orange-700 mt-1">{bronzeCount}</p>
          </div>
        </div>
      </div>

      {/* MODAL DETAIL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
              <div className="text-gray-400 text-3xl">ℹ️</div>
            </div>
            <h2 className="text-gray-500 font-medium uppercase tracking-widest text-xs mb-1">
              {selected.title}
            </h2>
            <p className="text-3xl font-black text-gray-900 mb-6 break-all">
              {selected.value}
            </p>
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