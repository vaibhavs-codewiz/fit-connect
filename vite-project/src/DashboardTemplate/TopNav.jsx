import { Menu, Search, Bell, Moon } from "lucide-react";

export default function TopNav({user}) {

    console.log("topnav",user);
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
                <button className="p-2 rounded-md bg-gray-800 hover:bg-gray-700">
                    <Moon className="h-5 w-5 text-white" />
                </button>
                <button className="relative p-2 rounded-md bg-gray-800 hover:bg-gray-700">
                    <Bell className="h-5 w-5 text-white" />
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        src="https://i.pravatar.cc/40" // Replace with actual profile image
                        alt="User"
                        className="w-9 h-9 rounded-full"
                    />
                    <span className="text-white font-medium">{user.name}▼</span>
                </div>
            </div>
        </nav>
    );
}
