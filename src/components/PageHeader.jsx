import { FaShoppingCart, FaUsers, FaDollarSign, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function PageHeader() {
    const [selected, setSelected] = useState(null);

    const handleCardClick = (title, value) => {
        setSelected({ title, value });
    };

    const closeModal = () => setSelected(null);

    return (
        /* h-screen: tinggi pas layar
           overflow-hidden: mematikan scroll utama browser
           flex-col: agar header dan content tersusun vertikal
        */
        <div className="h-screen overflow-hidden bg-[#f8fafc] p-8 font-sans text-slate-800 flex flex-col">

            {/* HEADER SECTION - Tetap di atas (flex-none) */}
            <div className="mb-8 flex-none">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900">Dashboard</h2>
                        <p className="text-slate-400 text-sm font-medium">
                            Dashboard <span className="mx-1 text-slate-300">/</span> 
                            <span className="text-emerald-500 font-semibold">Order List</span>
                        </p>
                    </div>

                    <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-200 text-white px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95">
                        <FaPlus className="text-xs" />
                        Add Order
                    </button>
                </div>

                {/* QUICK STATS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard 
                        icon={<FaShoppingCart />} 
                        label="Total Orders" 
                        value="120" 
                        color="blue"
                        onClick={() => handleCardClick("Total Orders", "120")}
                    />
                    <StatCard 
                        icon={<FaUsers />} 
                        label="Customers" 
                        value="80" 
                        color="purple"
                        onClick={() => handleCardClick("Customers", "80")}
                    />
                    <StatCard 
                        icon={<FaDollarSign />} 
                        label="Revenue" 
                        value="$2,400" 
                        color="emerald"
                        onClick={() => handleCardClick("Revenue", "$2,400")}
                    />
                </div>
            </div>

            {/* MAIN CONTENT AREA 
                flex-1: Mengambil sisa tinggi layar yang tersedia.
                overflow-hidden: Memastikan area ini tidak meluber ke bawah.
            */}
            <div className="flex-1 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm mb-4 flex flex-col overflow-hidden">
                
                {/* Scrollable Container Internal
                    Jika nanti ada tabel panjang, yang scroll hanya area ini saja,
                    bukan seluruh halaman webnya.
                */}
                <div className="flex-1 overflow-y-auto p-8 border-dashed border-2 border-slate-100 rounded-[2.5rem]">
                    <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShoppingCart className="text-slate-200 text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-700">Main Content Section</h3>
                        <p className="text-slate-400 text-sm mt-2 max-w-md">
                            Halaman ini sudah dikunci. Tidak akan ada scroll di luar container utama. 
                            Gunakan area ini untuk menampilkan data Anda.
                        </p>
                    </div>
                </div>

            </div>

            {/* MODAL SECTION */}
            {selected && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
                        <div className="text-center">
                            <h2 className="text-2xl font-black text-slate-800 mb-1">{selected.title}</h2>
                            <div className="bg-slate-50 rounded-2xl py-6 my-6 border border-slate-100">
                                <div className="text-4xl font-black text-emerald-500">{selected.value}</div>
                            </div>
                            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold active:scale-95 transition-transform" onClick={closeModal}>
                                Close Detail
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Komponen Card Kecil agar kode lebih bersih
function StatCard({ icon, label, value, color, onClick }) {
    const colors = {
        blue: "bg-blue-50 text-blue-500 group-hover:bg-blue-500",
        purple: "bg-purple-50 text-purple-500 group-hover:bg-purple-500",
        emerald: "bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500"
    };

    return (
        <div 
            onClick={onClick}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group"
        >
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl transition-colors group-hover:text-white ${colors[color]}`}>
                    {icon}
                </div>
                <div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{label}</p>
                    <h2 className="text-2xl font-black text-slate-800">{value}</h2>
                </div>
            </div>
        </div>
    );
}