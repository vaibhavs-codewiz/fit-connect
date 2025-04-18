import { Button } from "./ui/Button";
import { useState } from "react";
import RegisterModal from "./template/RegisterModal";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/50">
                <div className="flex items-center gap-2">
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-kn1C5CDk5zUaYa4BHkG1FKUQupEsrm.png"
                            alt="Crop Studio"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <span className="font-medium text-white">Gym Studio</span>
                    </a>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-md text-gray-300 hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#" className="text-md text-gray-300 hover:text-white transition-colors">
                        Dashboard
                    </a>
                    <a href="#" className="text-md text-gray-300 hover:text-white transition-colors">
                        Gyms
                    </a>
                    <a href="#" className="text-md text-gray-300 hover:text-white transition-colors">
                        Pricing
                    </a>
                    <a href="#" className="text-md   text-gray-300 hover:text-white transition-colors">
                        Contact
                    </a>
                </nav>

                {/* <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                    Download
                </Button> */}
                <div className="mt-3 flex gap-[30px]">
                    < RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    <Button size="large"
                        className="theme-button"
                    >Sign in</Button>
                </div>
            </div>
        </header>
    );
}
