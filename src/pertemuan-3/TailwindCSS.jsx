import './tailwind.css';

export default function TailwindCSS() {
  return (
    // Background utama menggunakan pink sangat muda (slate-50 diganti ke pink-50)
    <div className="min-h-screen bg-pink-50 p-8 space-y-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-800 border-b-4 border-pink-500 pb-2 mb-6 inline-block">
          Belajar Tailwind CSS 4
        </h1>
        
        <div className="block mb-8">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium
                             px-6 py-3 rounded-xl shadow-md hover:shadow-pink-200 
                             transition-all duration-300 transform hover:-translate-y-1">
            Click Me
          </button>
        </div>

        {/* Layouting komponen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Spacing/>
          <Typography/>
          <BackgroundColors/>
          <ShadowEffects/>
        </div>

        <div className="mt-12">
          <BorderRadius/>
        </div>

        <div className="mt-12">
          <FlexboxGrid/>
        </div>
      </div>
    </div>
  )
}

function Spacing(){
    return (
        <div className="bg-white shadow-sm border border-pink-100 p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-slate-800">Card Title</h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              Ini adalah contoh penggunaan padding dan margin di Tailwind dengan spacing yang lebih lega.
            </p>
        </div>
    )
}

function Typography(){
    return (
        <div className="flex flex-col justify-center">
            {/* Gradient teks diubah ke nuansa Pink ke Rose */}
            <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">
              Tailwind Typography
            </h1>
            <p className="text-slate-500 text-lg mt-3 italic">
              Belajar Tailwind sangat menyenangkan dan cepat!
            </p>
        </div>
    )
}

function BorderRadius(){
    return (
        <div className="flex items-center space-x-4">
          <button className="border-2 border-pink-500 text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors"> 
            Tombol Rounded Full
          </button>
          <span className="text-slate-400 text-sm italic items-center"></span>
        </div>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-gradient-to-br from-pink-600 to-rose-700 text-white p-8 rounded-2xl shadow-xl shadow-pink-100">
            <h3 className="text-2xl font-bold">Tailwind Colors</h3>
            <p className="mt-3 opacity-90 leading-relaxed">
              Menggunakan gradient memberikan kesan kedalaman yang lebih modern pada UI Anda.
            </p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between items-center bg-pink-950 p-5 rounded-2xl text-white shadow-2xl">
            <h1 className="text-xl font-black tracking-widest uppercase">My<span className="text-pink-400">Website</span></h1>
            <ul className="flex space-x-8 font-medium text-pink-100">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-pink-400">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-md p-8 rounded-2xl border border-pink-50 hover:shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold text-slate-800">Hover me!</h3>
            <p className="text-slate-500 mt-3">Lihat efek bayangan halus dan transisi scale saat kursor di atas box ini.</p>
        </div>
    )
}