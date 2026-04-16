import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div>

            {/* Title */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <p className="text-gray-400 text-sm">
                        Home / Home Detail / Home Very Detail
                    </p>
                </div>

                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Add Button
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-4 gap-6">

                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <FaShoppingCart className="text-green-500 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">75</h3>
                        <p className="text-gray-400 text-sm">Total Orders</p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <FaTruck className="text-blue-500 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">175</h3>
                        <p className="text-gray-400 text-sm">Total Delivered</p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="bg-red-100 p-3 rounded-full">
                        <FaBan className="text-red-500 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">40</h3>
                        <p className="text-gray-400 text-sm">Total Canceled</p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                        <FaDollarSign className="text-yellow-500 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Rp.128</h3>
                        <p className="text-gray-400 text-sm">Total Revenue</p>
                    </div>
                </div>

            </div>

        </div>
    );
}