import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    customerId: "",
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, form]);
    setShowForm(false);
    setForm({
      customerId: "",
      customerName: "",
      email: "",
      phone: "",
      loyalty: "Bronze",
    });
  };

  return (
    <div className=" bg-gray-50 p-4 md:p-8">
      <PageHeader title="Customers" breadcrumb={["Home", "Customers"]}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2"
        >
          <span className="text-xl">+</span> Add Customer
        </button>
      </PageHeader>

      {/* TABLE SECTION */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">ID</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Email</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Phone</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Loyalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((c, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">{c.customerId}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{c.customerName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{c.phone}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${c.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' : 
                        c.loyalty === 'Silver' ? 'bg-slate-100 text-slate-700' : 
                        'bg-orange-100 text-orange-700'}`}>
                      {c.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL SECTION */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <form 
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Add Customer</h2>
              <p className="text-sm text-gray-500">Enter details to register a new client.</p>
            </div>

            <div className="space-y-4">
              <input 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                placeholder="Customer ID (ex: CUST-01)"
                value={form.customerId}
                onChange={(e) => setForm({...form, customerId: e.target.value})}
                required
              />
              <input 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                placeholder="Full Name"
                value={form.customerName}
                onChange={(e) => setForm({...form, customerName: e.target.value})}
                required
              />
              <input 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                required
              />
              <input 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
              />
              <div className="relative">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">Loyalty Tier</label>
                <select
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none appearance-none transition-all"
                  value={form.loyalty}
                  onChange={(e) => setForm({...form, loyalty: e.target.value})}
                >
                  <option>Bronze</option>
                  <option>Silver</option>
                  <option>Gold</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button 
                type="button" 
                onClick={() => setShowForm(false)}
                className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-1 px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-[0.98]"
              >
                Save Customer
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}