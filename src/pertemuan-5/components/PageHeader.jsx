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