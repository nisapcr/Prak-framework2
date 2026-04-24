import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders([...orders, form]);
    setShowForm(false);
    setForm({
      orderId: "",
      customerName: "",
      status: "Pending",
      totalPrice: "",
      orderDate: "",
    });
  };

  return (
    <div className=" bg-gray-50 p-4 md:p-8">
      <PageHeader title="Orders" breadcrumb={["Home", "Orders"]}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm flex items-center gap-2"
        >
          <span className="text-xl">+</span> Add Orders
        </button>
      </PageHeader>

      {/* TABLE SECTION */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">ID</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Customer</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Total Price</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((o, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-indigo-600 font-medium">{o.orderId}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{o.customerName}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${o.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                        o.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                        'bg-red-100 text-red-700'}`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                    {Number(o.totalPrice).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace(',00', '')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{o.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800">New Order</h2>
              <p className="text-sm text-gray-500">Record a new transaction in the system.</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Order ID</label>
                  <input 
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="ORD-001"
                    value={form.orderId}
                    onChange={(e) => setForm({...form, orderId: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Date</label>
                  <input 
                    type="date"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={form.orderDate}
                    onChange={(e) => setForm({...form, orderDate: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Customer Name</label>
                <input 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="John Doe"
                  value={form.customerName}
                  onChange={(e) => setForm({...form, customerName: e.target.value})}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Status</label>
                  <select
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none"
                    value={form.status}
                    onChange={(e) => setForm({...form, status: e.target.value})}
                  >
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Total Price</label>
                  <input 
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="50000"
                    value={form.totalPrice}
                    onChange={(e) => setForm({...form, totalPrice: e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button 
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all shadow-md shadow-emerald-100"
              >
                Save Order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}