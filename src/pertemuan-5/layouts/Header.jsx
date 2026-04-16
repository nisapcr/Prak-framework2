import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div className="flex justify-between items-center mb-6">

            {/* Search */}
            <div className="relative w-80">
                <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />

                <input
                    type="text"
                    placeholder="Search Here..."
                    className="w-full border px-4 py-2 rounded-lg pl-10 focus:outline-none"
                />
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">

                <div className="relative">
                    <FaBell className="text-xl text-gray-600" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
                        50
                    </span>
                </div>

                <FcAreaChart className="text-xl" />
                <SlSettings className="text-xl text-gray-600" />

                {/* PROFILE FIX */}
                <div className="flex items-center gap-2">
                    <span>Hello, <b>Fikri Muhaffizh</b></span>

                    <img
                        src="https://i.pravatar.cc/40"
                        className="w-10 h-10 rounded-full"
                        alt="profile"
                    />
                </div>

            </div>
        </div>
    );
}