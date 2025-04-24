import { Menu, Search, Bell, Moon } from "lucide-react";
import { toast } from "react-toastify";

export default function TopNav({ data }) {
    const handleLogout = () => {
        localStorage.clear(); // Clears all keys from localStorage
        toast.success("you logged out.")
        window.location.href = "/"; // Redirect to login page
    }
    console.log("topnav", data);
    return (
        <nav className="bg-black text-white flex items-center justify-between px-6 py-3 border-b border-gray-800">
            {/* Left - Menu & Search Bar */}
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-md bg-gray-800 hover:bg-gray-700">
                    <Menu className="h-5 w-5 text-white" />
                </button>

                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search or type command..."
                        className="w-80 pl-10 pr-12 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-400 text-sm bg-gray-800 px-2 py-1 rounded-md">
                        ⌘ K
                    </span>
                </div>
            </div>

            {/* Right - Icons & Profile */}
            <div className="flex items-center gap-6">
                {/* Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1731499365752-cf90a04e0836?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual profile image
                        alt="User"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="text-white font-medium">{data?.name ?? "Loading..."} </span>
                    <div onClick={handleLogout} className="bg-[#C8AD7F] text-black font-semibold text-sm px-3 py-2 rounded-md">logout</div>
                </div>
            </div>
        </nav>
    );
}
