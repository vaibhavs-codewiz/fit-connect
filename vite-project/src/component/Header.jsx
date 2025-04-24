import { useState } from "react";
import RegisterModal from "./template/RegisterModal";
import SignInModal from "./template/SignInModal"; // <- Import SignInModal

export function Header({ scrollTargets }) {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    console.log(scrollTargets)

    const scrollTo = (ref, section) => {
        setActiveSection(section);
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    };
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
                        <span className="font-semibold text-lg text-white"><span className="text-[#C8AD7F]">Fit</span> Connect</span>
                    </a>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollTo(scrollTargets?.homeRef, "home")}
                        className={`text-md transition-colors ${activeSection === "home"
                            ? "text-[#C8AD7F] font-semibold"
                            : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollTo(scrollTargets?.gymRef, "gyms")}
                        className={`text-md transition-colors ${activeSection === "gyms"
                            ? "text-[#C8AD7F] font-semibold"
                            : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Gyms
                    </button>
                    <button
                        onClick={() => scrollTo(scrollTargets?.reviewRef, "review")}
                        className={`text-md transition-colors ${activeSection === "review"
                            ? "text-[#C8AD7F] font-semibold"
                            : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Review
                    </button>
                    <button
                        onClick={() => scrollTo(scrollTargets?.contactRef, "contact")}
                        className={`text-md transition-colors ${activeSection === "contact"
                            ? "text-[#C8AD7F] font-semibold"
                            : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Contact
                    </button>
                </nav>


                <div className="mt-3 flex gap-[30px]">
                    <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />


                    <SignInModal isOpen={isSignInModalOpen} onClose={() => setIsSignInModalOpen(false)} />

                </div>
            </div>
        </header>
    );
}
