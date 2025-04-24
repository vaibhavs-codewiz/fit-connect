import { Wallet, LayoutDashboard, BarChart3, Globe, Settings } from "lucide-react";
import { Button } from "../../component/ui/Button";

export default function Sidebar({ details }) {
    const { user, handleActive } = details;
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="grid lg:grid-cols-[280px_1fr]">
                <aside className="border-r bg-background/50 backdrop-blur">
                    {/* Logo Section */}
                    <div className="flex h-16 items-center gap-2 border-b px-6">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-kn1C5CDk5zUaYa4BHkG1FKUQupEsrm.png"
                            alt="Crop Studio"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <span className="font-semibold text-lg text-white"><span className="text-[#C8AD7F]">Fit</span> Connect</span>
                    </div>

                    {/* Search Input */}
                    <div className="px-4 py-4">
                        <input
                            type="text"
                            placeholder="search"
                            className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2"
                        />
                    </div>

                    {/* Navigation Menu */}
                    <nav className="space-y-2 px-2">
                        <Button onClick={() => handleActive("Service")} variant="ghost" className="w-full justify-start gap-2">
                            <LayoutDashboard className="h-4 w-4" />
                            Service
                        </Button>
                        <Button onClick={() => handleActive("ServiceHistory")} variant="ghost" className="w-full justify-start gap-2">
                            <BarChart3 className="h-4 w-4" />
                            Service history
                        </Button>
                        <Button onClick={() => handleActive("ProfileCard")} variant="ghost" className="w-full justify-start gap-2">
                            <Globe className="h-4 w-4" />
                            Profile
                        </Button>
                        <Button onClick={() => handleActive("ExploreGyms")} variant="ghost" className="w-full justify-start gap-2">
                            <Globe className="h-4 w-4" />
                            Explore gyms
                        </Button>

                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Settings className="h-4 w-4" />
                            Settings
                        </Button>
                    </nav>
                </aside>
            </div>
        </div>
    );
}
