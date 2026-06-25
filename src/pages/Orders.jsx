import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Orders({ orders, setOrders, customers, setCustomers }) {
  const [showForm, setShowForm] = useState(false);
  
  // State untuk mengontrol Detail Modal Customer terpilih
  const [activeCustomerDetail, setActiveCustomerDetail] = useState(null);

  const [form, setForm] = useState({
    orderId: "",
    customerId: "", 
    status: "Pending",
    subtotal: "",   
    orderDate: "",
  });

  // Helper kalkulasi poin
  const calculatePoints = (amount) => Math.floor(amount / 10000);

  // Helper level membership
  const getMembershipLevel = (points) => {
    if (points >= 600) return "Platinum";
    if (points >= 300) return "Gold";
    if (points >= 100) return "Silver";
    return "Bronze";
  };

  // Helper angka persentase diskon
  const getDiscountPercent = (loyalty) => {
    switch (loyalty) {
      case "Platinum": return 15;
      case "Gold": return 10;
      case "Silver": return 5;
      default: return 0;
    }
  };

  // Deteksi Profile Customer Terpilih untuk Live Preview Form
  const selectedCustomer = customers.find((c) => c.customerId === form.customerId);
  const currentDiscountPercent = selectedCustomer ? getDiscountPercent(selectedCustomer.loyalty) : 0;
  
  // Hitung Nilai Transaksi Bersih
  const calculatedDiscountAmount = (Number(form.subtotal) * currentDiscountPercent) / 100;
  const calculatedFinalPrice = Number(form.subtotal) - calculatedDiscountAmount;

  // Fungsi pembantu untuk memicu Modal Detail dari baris tabel
  const handleOpenCustomerDetail = (targetId) => {
    const targetData = customers.find((c) => c.customerId === targetId);
    if (targetData) {
      setActiveCustomerDetail(targetData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.customerId) {
      alert("Silakan pilih customer terlebih dahulu!");
      return;
    }

    // 1. VALIDASI DUPLICATE ORDER ID
    const isDuplicateOrder = orders.some(
      (o) => o.orderId.toLowerCase().trim() === form.orderId.toLowerCase().trim()
    );
    if (isDuplicateOrder) {
      alert(`Gagal menyimpan! Order ID "${form.orderId}" sudah terdaftar di sistem.`);
      return;
    }

    // Hitung potensi poin dari FINAL PRICE (Total yang dibayarkan)
    const earnedPoints = calculatePoints(calculatedFinalPrice);

    // Buat objek record pesanan baru
    const newOrder = {
      orderId: form.orderId.toUpperCase().trim(),
      customerId: form.customerId,
      customerName: selectedCustomer.customerName, 
      status: form.status,
      subtotal: Number(form.subtotal),
      discountAmount: calculatedDiscountAmount,
      totalPrice: calculatedFinalPrice, 
      earnedPoints: form.status === "Completed" ? earnedPoints : 0, // Hanya catat poin masuk di order jika status Completed
      orderDate: form.orderDate,
    };

    setOrders([...orders, newOrder]);

    // 2. LOGIKA FIX: UPDATE POIN & MEMBESHIP HANYA JIKA STATUS "Completed"
    if (form.status === "Completed") {
      const updatedCustomers = customers.map((cust) => {
        if (cust.customerId === form.customerId) {
          const nextPoints = (cust.points || 0) + earnedPoints;
          const nextLoyalty = getMembershipLevel(nextPoints);
          return {
            ...cust,
            points: nextPoints,
            loyalty: nextLoyalty,
          };
        }
        return cust;
      });
      setCustomers(updatedCustomers);
    }

    setShowForm(false);
    
    // Reset Form State
    setForm({ orderId: "", customerId: "", status: "Pending", subtotal: "", orderDate: "" });
  };

  return (
    <div className="bg-gray-50 p-4 md:p-8">
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
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Order ID</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Cust ID</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Customer Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Subtotal</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Total Paid (Net)</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Points Earned</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((o, i) => (
                <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-indigo-600 font-medium">{o.orderId}</td>
                  
                  {/* Interaktivitas: Mengklik ID atau Nama memicu Modal Detail */}
                  <td 
                    onClick={() => handleOpenCustomerDetail(o.customerId)}
                    className="px-6 py-4 text-sm font-mono text-gray-500 cursor-pointer hover:text-indigo-600 hover:underline"
                  >
                    {o.customerId || "N/A"}
                  </td>
                  <td 
                    onClick={() => handleOpenCustomerDetail(o.customerId)}
                    className="px-6 py-4 text-sm font-medium text-gray-900 cursor-pointer hover:text-indigo-600 hover:underline"
                  >
                    {o.customerName}
                  </td>
                  
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${o.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                        o.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                        'bg-red-100 text-red-700'}`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {o.subtotal ? o.subtotal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace(',00', '') : "-"}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                    {Number(o.totalPrice).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace(',00', '')}
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold ${o.status === 'Completed' ? 'text-emerald-600' : 'text-gray-400'}`}>
                    +{o.earnedPoints || 0} Pts
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
          <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">New Order</h2>
              <p className="text-sm text-gray-500">Record a transaction with smart CRM point logic.</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Order ID</label>
                  <input 
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                    placeholder="ORD-031" value={form.orderId}
                    onChange={(e) => setForm({...form, orderId: e.target.value})} required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Date</label>
                  <input 
                    type="date" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                    value={form.orderDate} onChange={(e) => setForm({...form, orderDate: e.target.value})} required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Select Customer (ID)</label>
                <select
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                  value={form.customerId}
                  onChange={(e) => setForm({...form, customerId: e.target.value})}
                  required
                >
                  <option value="">-- Choose Member ID --</option>
                  {customers.map((c) => (
                    <option key={c.customerId} value={c.customerId}>
                      {c.customerId} - {c.customerName}
                    </option>
                  ))}
                </select>
              </div>

              {selectedCustomer && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1 text-gray-600 animate-in fade-in duration-150">
                  <p>👤 <strong>Member Name:</strong> {selectedCustomer.customerName}</p>
                  <p>🎖️ <strong>Current Membership:</strong> <span className="text-indigo-600 font-semibold">{selectedCustomer.loyalty}</span></p>
                  <p>💰 <strong>Tier Discount Benefit:</strong> <span className="text-emerald-600 font-bold">{currentDiscountPercent}% Off</span></p>
                  <p>⭐ <strong>Existing Points Balance:</strong> {selectedCustomer.points} Pts</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Status</label>
                  <select
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                    value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}
                  >
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Price (Gross Subtotal)</label>
                  <input 
                    type="number" placeholder="Gross Price"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                    value={form.subtotal} onChange={(e) => setForm({...form, subtotal: e.target.value})} required
                  />
                </div>
              </div>

              {Number(form.subtotal) > 0 && (
                <div className="border-t border-dashed pt-2 space-y-1 text-sm text-right">
                  <p className="text-gray-500">Gross Subtotal: Rp {Number(form.subtotal).toLocaleString('id-ID')}</p>
                  <p className="text-red-500">CRM Discount ({currentDiscountPercent}%): -Rp {calculatedDiscountAmount.toLocaleString('id-ID')}</p>
                  <p className="text-gray-800 font-bold text-base">Total Pay: Rp {calculatedFinalPrice.toLocaleString('id-ID')}</p>
                  <p className={`text-xs font-medium ${form.status === 'Completed' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {form.status === 'Completed' 
                      ? `✨ Will Earn: +${calculatePoints(calculatedFinalPrice)} CRM Points` 
                      : `⏳ Points on hold (Status: ${form.status})`}
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setShowForm(false)} className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">Cancel</button>
              <button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all shadow-md text-sm">Save Order</button>
            </div>
          </form>
        </div>
      )}

      {/* ADDITIONAL FITUR: CUSTOMER DETAIL MODAL POPUP */}
      {activeCustomerDetail && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveCustomerDetail(null)}
        >
          <div 
            className="bg-white w-full max-w-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-white">
              <span className="text-xs font-mono bg-indigo-500/50 px-2 py-0.5 rounded uppercase tracking-wider">
                {activeCustomerDetail.customerId}
              </span>
              <h3 className="text-lg font-bold mt-1">{activeCustomerDetail.customerName}</h3>
            </div>
            
            {/* Konten Detail */}
            <div className="p-6 space-y-4 text-sm">
              <div className="grid grid-cols-3 border-b border-gray-100 pb-2">
                <span className="text-gray-400 font-medium">Email</span>
                <span className="col-span-2 text-gray-800 font-medium break-all">{activeCustomerDetail.email}</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 pb-2">
                <span className="text-gray-400 font-medium">Phone</span>
                <span className="col-span-2 text-gray-800 font-mono">{activeCustomerDetail.phone || "-"}</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 pb-2">
                <span className="text-gray-400 font-medium">Total Points</span>
                <span className="col-span-2 text-emerald-600 font-bold">{activeCustomerDetail.points} Pts</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 pb-2">
                <span className="text-gray-400 font-medium">Membership</span>
                <span className="col-span-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold 
                    ${activeCustomerDetail.loyalty === 'Platinum' ? 'bg-purple-100 text-purple-700' : 
                      activeCustomerDetail.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' : 
                      activeCustomerDetail.loyalty === 'Silver' ? 'bg-slate-100 text-slate-700' : 
                      'bg-orange-100 text-orange-700'}`}>
                    {activeCustomerDetail.loyalty}
                  </span>
                </span>
              </div>
              <div className="grid grid-cols-3 pb-1">
                <span className="text-gray-400 font-medium">Discount Privilege</span>
                <span className="col-span-2 text-indigo-600 font-bold">
                  {getDiscountPercent(activeCustomerDetail.loyalty)}% Off Next Purchase
                </span>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setActiveCustomerDetail(null)}
                className="px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-xl transition-all"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}