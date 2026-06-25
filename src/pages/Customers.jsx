import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers({ customers, setCustomers }) {
  const [showForm, setShowForm] = useState(false);
  
  // State untuk Search dan Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLoyalty, setFilterLoyalty] = useState("All");

  const [form, setForm] = useState({
    customerId: "",
    customerName: "",
    email: "",
    phone: "",
    points: 0,
  });

  // Helper level membership (digunakan saat mendaftarkan customer baru)
  const getMembershipLevel = (points) => {
    if (points >= 600) return "Platinum";
    if (points >= 300) return "Gold";
    if (points >= 100) return "Silver";
    return "Bronze";
  };

  // Helper angka persentase diskon untuk render visual di tabel
  const getDiscount = (loyalty) => {
    switch (loyalty) {
      case "Platinum": return "15%";
      case "Gold": return "10%";
      case "Silver": return "5%";
      default: return "0%";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi Duplicate Customer ID
    const isDuplicate = customers.some(
      (c) => c.customerId.toLowerCase().trim() === form.customerId.toLowerCase().trim()
    );
    if (isDuplicate) {
      alert(`Error: Customer ID "${form.customerId}" sudah terdaftar di sistem!`);
      return;
    }

    const initialPoints = Number(form.points) || 0;
    const loyalty = getMembershipLevel(initialPoints);

    setCustomers([
      ...customers,
      {
        ...form,
        customerId: form.customerId.toUpperCase().trim(),
        points: initialPoints,
        loyalty,
      },
    ]);

    setShowForm(false);
    setForm({ customerId: "", customerName: "", email: "", phone: "", points: 0 });
  };

  // Logika Pemfilteran Menggunakan State Murni (Mencegah Double Point)
  const filteredCustomers = customers.filter((c) => {
    const matchesSearch = 
      c.customerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.customerId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterLoyalty === "All" || c.loyalty === filterLoyalty;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-50 p-4 md:p-8">
      <PageHeader title="Customers" breadcrumb={["Home", "Customers"]}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2"
        >
          <span className="text-xl">+</span> Add Customer
        </button>
      </PageHeader>

      {/* SEARCH & FILTER BAR */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search by name or ID..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <span className="text-sm text-gray-500 whitespace-nowrap">Loyalty Tier:</span>
          <select
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-gray-50"
            value={filterLoyalty}
            onChange={(e) => setFilterLoyalty(e.target.value)}
          >
            <option value="All">All Tiers</option>
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">ID</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Email</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Phone</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Total Points</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Discount</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Loyalty Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-gray-400 text-sm">No customers found.</td>
                </tr>
              ) : (
                filteredCustomers.map((c, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-indigo-600 font-medium">{c.customerId}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{c.customerName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{c.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{c.phone || "-"}</td>
                    <td className="px-6 py-4 text-sm font-bold text-emerald-600">{c.points} Pts</td>
                    <td className="px-6 py-4 text-sm font-bold text-indigo-600">{getDiscount(c.loyalty)}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                        ${c.loyalty === 'Platinum' ? 'bg-purple-100 text-purple-700' : 
                          c.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' : 
                          c.loyalty === 'Silver' ? 'bg-slate-100 text-slate-700' : 
                          'bg-orange-100 text-orange-700'}`}>
                        {c.loyalty}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL SECTION */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Add Customer</h2>
              <p className="text-sm text-gray-500">Enter details to register a new client.</p>
            </div>
            <div className="space-y-4">
              <input 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
                placeholder="Customer ID (ex: CUST011)"
                value={form.customerId}
                onChange={(e) => setForm({...form, customerId: e.target.value})}
                required
              />
              <input 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
                placeholder="Full Name"
                value={form.customerName}
                onChange={(e) => setForm({...form, customerName: e.target.value})}
                required
              />
              <input 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                required
              />
              <input 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
              />
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Initial Points</label>
                <input
                  type="number"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
                  placeholder="0"
                  value={form.points}
                  onChange={(e) => setForm({ ...form, points: Number(e.target.value) })}
                />
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <button type="button" onClick={() => setShowForm(false)} className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">Cancel</button>
              <button type="submit" className="flex-1 px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 shadow-md transition-all text-sm">Save Customer</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}