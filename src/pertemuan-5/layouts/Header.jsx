import { FaBell, FaSearch, FaHistory, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {
    // Logic tetap dipertahankan sesuai aslinya
    const [openSearch, setOpenSearch] = useState(false);
    const [keyword, setKeyword] = useState("");

    return (
        <div className="flex justify-between items-center mb-8 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-sm">

            {/* SEARCH BAR (TRIGGER MODAL) */}
            <div
                className="relative w-full max-w-md group cursor-pointer"
                onClick={() => setOpenSearch(true)}
            >
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                <input
                    type="text"
                    readOnly
                    placeholder="Search analytics, orders, or reports..."
                    className="w-full bg-slate-100/50 border-none px-5 py-3 rounded-xl pl-12 focus:outline-none cursor-pointer placeholder:text-slate-400 text-sm font-medium hover:bg-slate-100 transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-slate-200 px-2 py-1 rounded text-[10px] text-slate-400 font-bold shadow-sm">
                    CTRL + K
                </div>
            </div>

            {/* RIGHT MENU AREA */}
            <div className="flex items-center gap-8">

                {/* ICONS GROUP */}
                <div className="flex items-center gap-5 border-r border-slate-200 pr-8">
                    <div className="relative group cursor-pointer">
                        <FaBell className="text-xl text-slate-500 group-hover:text-emerald-500 transition-colors" />
                        <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm animate-bounce">
                            12
                        </span>
                    </div>

                    <div className="cursor-pointer hover:scale-110 transition-transform">
                        <FcAreaChart className="text-2xl" />
                    </div>

                    <div className="cursor-pointer group">
                        <SlSettings className="text-xl text-slate-500 group-hover:rotate-90 transition-transform duration-500 group-hover:text-emerald-500" />
                    </div>
                </div>

                {/* USER PROFILE */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Administrator</p>
                        <p className="text-sm font-black text-slate-800 group-hover:text-emerald-500 transition-colors">Siti Harnisa</p>
                    </div>
                    <div className="relative">
                        <img
                            src="/img/nisa.jpeg"
                            className="w-11 h-11 rounded-xl object-cover border-2 border-white shadow-md group-hover:border-emerald-200 transition-all"
                            alt="profile"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                    </div>
                </div>

            </div>

            {/* 🔥 MODAL SEARCH (UPGRADED VERSION) */}
            {openSearch && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-start justify-center z-50 pt-20 px-4"
                    onClick={() => setOpenSearch(false)}
                >
                    <div
                        className="bg-white rounded-[2rem] w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input Area */}
                        <div className="p-6 border-b border-slate-100 flex items-center gap-4">
                            <FaSearch className="text-emerald-500 text-xl" />
                            <input
                                autoFocus
                                type="text"
                                className="flex-1 text-lg font-medium focus:outline-none placeholder:text-slate-300"
                                placeholder="What are you looking for?"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <button 
                                onClick={() => setOpenSearch(false)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <FaTimes className="text-slate-400" />
                            </button>
                        </div>

                        {/* Results / Suggestions */}
                        <div className="p-6 bg-slate-50/50">
                            {keyword ? (
                                <div className="mb-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Search Result</p>
                                    <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl border border-emerald-100 font-bold flex justify-between items-center">
                                        <span>"{keyword}"</span>
                                        <span className="text-[10px] bg-emerald-200 px-2 py-1 rounded">Found 0 items</span>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <FaHistory className="text-slate-300 text-xs" />
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Analysis</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {["Monthly Revenue Report", "Customer Retention 2026", "Server Logs", "Marketing ROI"].map((item) => (
                                            <div key={item} className="p-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-emerald-400 hover:text-emerald-500 cursor-pointer transition-all shadow-sm">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Modal */}
                        <div className="p-4 px-8 bg-white border-t border-slate-100 flex justify-between items-center">
                            <p className="text-[10px] text-slate-400">Tip: Use arrows to navigate results</p>
                            <button
                                className="text-sm font-black text-rose-500 hover:text-rose-600 transition-colors uppercase tracking-widest"
                                onClick={() => setOpenSearch(false)}
                            >
                                Close ESC
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}