export default function InputField({ label, type, placeholder }) {
  return (
    <div className="mb-3">
      <label className="block text-pink-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border border-pink-200 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-pink-500 
                   focus:border-transparent transition-all"
      />
    </div>
  );
}