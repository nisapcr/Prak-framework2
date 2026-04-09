export default function ResponsiveText(){
    return (
        <>
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.<br/>
                Coba hapus class yang menggunakan prefix breakpoint dan lihat perbedaannya!
            </p>

            <ResponsiveWidth />
            <ResponsiveLayout />
        </>
    )
}

function ResponsiveWidth(){
    return (
        <div className="mb-4">
            <p>
                Coba lakukan <strong>zoom in/zoom out</strong> atau ubah ukuran layar.
            </p>

            <div className="flex flex-col md:flex-row mb-4">
                <div className="bg-red-400 w-full md:w-1/2 p-4">Kolom 1</div>
                <div className="bg-blue-400 w-full md:w-1/2 p-4">Kolom 2</div>
            </div>
        </div>
    )
}

function ResponsiveLayout(){
    return (
        <div>
            <p className="mt-4">
                Contoh Grid Layout:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                <div className="bg-blue-500 p-4">Box 1</div>
                <div className="bg-blue-500 p-4">Box 2</div>
                <div className="bg-blue-500 p-4">Box 3</div>
                <div className="bg-blue-500 p-4">Box 4</div>
            </div>
        </div>
    )
}