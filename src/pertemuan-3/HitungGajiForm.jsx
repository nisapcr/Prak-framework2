import { useState } from "react";

export default function HitungGajiForm() {
    const [gaji, setGaji] = useState("");

    const pajak = 0.11;
    const totalGaji = gaji - (gaji * pajak);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-pink-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-pink-100">
                <h2 className="text-3xl font-bold text-center mb-6 text-pink-600 tracking-tight">
                    Hitung Gaji Bersih
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-pink-700 font-semibold mb-2 text-sm">
                            Gaji Pokok
                        </label>
                        <input
                            type="number"
                            placeholder="Masukkan jumlah gaji"
                            className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all placeholder:text-pink-200"
                            onChange={(e) => setGaji(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-pink-50/50 rounded-lg border border-dashed border-pink-200">
                        <span className="text-pink-800 text-sm font-medium">Potongan Pajak</span>
                        <span className="text-white font-bold bg-pink-500 px-2 py-1 rounded text-xs">
                            11% (PPN)
                        </span>
                    </div>

                    {!gaji || gaji <= 0 ? (
                        <div className="mt-4 p-4 bg-rose-50 border-l-4 border-rose-400 rounded-r-xl">
                            <p className="text-rose-700 font-medium text-sm">
                                Silakan masukkan gaji yang valid (tidak boleh kosong atau negatif).
                            </p>
                        </div>
                    ) : (
                        <div className="mt-4 p-5 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-lg shadow-pink-200 text-white transform transition-all">
                            <p className="text-xs opacity-90 uppercase tracking-widest font-bold mb-1">
                                Total Take Home Pay (THP)
                            </p>
                            <p className="text-2xl font-black">
                                Rp {totalGaji.toLocaleString("id-ID")}
                            </p>
                        </div>
                    )}
                </div>

                <p className="mt-8 text-center text-[10px] text-pink-300 uppercase tracking-widest font-bold">
                </p>
            </div>
        </div>
    );
}