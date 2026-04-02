import InputField from "./components/InputField";

export default function UserForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-5">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-pink-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-600 tracking-tight">
          Tambah User
        </h2>
        
        <div className="space-y-2">
          {/* Pastikan di dalam InputField.js warnanya juga sudah kamu ubah ke pink ya! */}
          <InputField label="Nama" type="text" placeholder="Silahkan ketik Nama..."/>
          <InputField label="Email" type="email" placeholder="Silahkan ketik Email..."/>
          <InputField label="Tanggal Lahir" type="date" />
        </div>

        <button className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-pink-200 transition-all transform active:scale-95 duration-200">
          Simpan Data
        </button>
      </div>
    </div>
  );
}