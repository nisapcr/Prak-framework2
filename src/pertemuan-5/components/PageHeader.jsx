export default function PageHeader() {
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <div className="text-xl font-bold">
                    Dashboard
                </div>
                <div className="text-gray-400 text-sm">
                    Dashboard / Order List
                </div>
            </div>

            <button className="bg-green-500 text-white px-4 py-2 rounded">
                Add Button
            </button>
        </div>
    );
}

export default function PageHeader() {
    return (
        <div className="mb-6">

            <div className="flex justify-between items-center mb-4">
                <div>
                    <div className="text-xl font-bold">
                        Dashboard
                    </div>
                    <div className="text-gray-400 text-sm">
                        Dashboard / Order List
                    </div>
                </div>

                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Add Order
                </button>
            </div>

            {/* 🔥 IMPROVISASI 2 - QUICK STATS */}
            <div className="grid grid-cols-3 gap-4">

                <div className="bg-white p-4 rounded shadow">
                    <p className="text-gray-400 text-sm">Total Orders</p>
                    <h2 className="text-xl font-bold">120</h2>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <p className="text-gray-400 text-sm">Customers</p>
                    <h2 className="text-xl font-bold">80</h2>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <p className="text-gray-400 text-sm">Revenue</p>
                    <h2 className="text-xl font-bold">$2,400</h2>
                </div>

            </div>
        </div>
    );
}