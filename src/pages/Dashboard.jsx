import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { useState } from "react";

export default function Dashboard() {

    // 🔥 IMPROVISASI: modal state
    const [selected, setSelected] = useState(null);

    const handleCardClick = (title, value) => {
        setSelected({ title, value });
    };

    const closeModal = () => {
        setSelected(null);
    };

    return (
        <div>

            {/* TITLE */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <p className="text-gray-400 text-sm">
                        Home / Home Detail / Home Very Detail
                    </p>
                </div>

                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Add Order
                </button>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-4 gap-6">

                <div
                    onClick={() => handleCardClick("Total Orders", 75)}
                    className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
                >
                    <div className="bg-green-100 p-3 rounded-full">
                        <FaShoppingCart className="text-green-500 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">75</h3>
                        <p className="text-gray-400 text-sm">Total Orders</p>
                    </div>
                </div>

                <div
                    onClick={() => handleCardClick("Total Delivered", 175)}
                    className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
                >
                    <div className="bg-blue-100 p-3 rounded-full">
                        <FaTruck className="text-blue-500 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">175</h3>
                        <p className="text-gray-400 text-sm">Total Delivered</p>
                    </div>
                </div>

                <div
                    onClick={() => handleCardClick("Total Canceled", 40)}
                    className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
                >
                    <div className="bg-red-100 p-3 rounded-full">
                        <FaBan className="text-red-500 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">40</h3>
                        <p className="text-gray-400 text-sm">Total Canceled</p>
                    </div>
                </div>

                <div
                    onClick={() => handleCardClick("Total Revenue", "Rp.128")}
                    className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
                >
                    <div className="bg-yellow-100 p-3 rounded-full">
                        <FaDollarSign className="text-yellow-500 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Rp.128</h3>
                        <p className="text-gray-400 text-sm">Total Revenue</p>
                    </div>
                </div>

            </div>

            {/* MODAL */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={closeModal}
                >

                    <div
                        className="bg-white p-6 rounded-2xl w-80 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <h2 className="text-lg font-bold mb-2">
                            {selected.title}
                        </h2>

                        <p className="text-gray-500 mb-4">
                            Total Data:
                        </p>

                        <div className="text-2xl font-bold text-green-600 mb-4">
                            {selected.value}
                        </div>

                        <button
                            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                            onClick={closeModal}
                        >
                            Close
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
}