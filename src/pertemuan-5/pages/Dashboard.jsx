import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function Dashboard() {
    // Logic tetap sama sesuai permintaanmu
    const [selected, setSelected] = useState(null);

    const handleCardClick = (title, value) => {
        setSelected({ title, value });
    };

    const closeModal = () => {
        setSelected(null);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] p-8 font-sans text-slate-800">

            {/* TITLE & HEADER */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">Dashboard</h2>
                    <p className="text-slate-400 text-sm font-medium mt-1">
                        Home <span className="mx-1 text-slate-300">/</span> 
                        Home Detail <span className="mx-1 text-slate-300">/</span> 
                        <span className="text-emerald-500 font-semibold">Home Very Detail</span>
                    </p>
                </div>

                <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-200 text-white px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95">
                    <FaPlus className="text-xs" />
                    Add Order
                </button>
            </div>

            {/* CARDS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Card 1 */}
                <div
                    onClick={() => handleCardClick("Total Orders", 75)}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                    <div className="bg-emerald-50 p-4 rounded-2xl group-hover:bg-emerald-500 transition-colors duration-300">
                        <FaShoppingCart className="text-emerald-500 text-2xl group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="font-black text-2xl text-slate-800">75</h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Orders</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    onClick={() => handleCardClick("Total Delivered", 175)}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                    <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-500 transition-colors duration-300">
                        <FaTruck className="text-blue-500 text-2xl group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="font-black text-2xl text-slate-800">175</h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Delivered</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    onClick={() => handleCardClick("Total Canceled", 40)}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                    <div className="bg-rose-50 p-4 rounded-2xl group-hover:bg-rose-500 transition-colors duration-300">
                        <FaBan className="text-rose-500 text-2xl group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="font-black text-2xl text-slate-800">40</h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Canceled</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div
                    onClick={() => handleCardClick("Total Revenue", "Rp.128")}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                    <div className="bg-amber-50 p-4 rounded-2xl group-hover:bg-amber-500 transition-colors duration-300">
                        <FaDollarSign className="text-amber-500 text-2xl group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="font-black text-2xl text-slate-800">Rp.128</h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Revenue</p>
                    </div>
                </div>

            </div>

            {/* MODAL SECTION */}
            {selected && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-[2rem] p-8 w-full max-w-sm shadow-2xl transform transition-all animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">
                                <FaShoppingCart />
                            </div>
                            
                            <h2 className="text-2xl font-black text-slate-800 mb-1">
                                {selected.title}
                            </h2>
                            <p className="text-slate-400 font-medium text-sm mb-6 uppercase tracking-widest">
                                Report Summary
                            </p>

                            <div className="bg-slate-50 rounded-2xl py-6 mb-8 border border-slate-100">
                                <p className="text-slate-500 text-xs font-bold uppercase mb-1">Total Data Accumulated</p>
                                <div className="text-4xl font-black text-emerald-500">
                                    {selected.value}
                                </div>
                            </div>

                            <button
                                className="w-full bg-slate-900 hover:bg-rose-500 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-slate-200 active:scale-95"
                                onClick={closeModal}
                            >
                                Close Detail
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}