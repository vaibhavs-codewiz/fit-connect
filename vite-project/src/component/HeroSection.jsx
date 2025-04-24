import { Header } from "./Header";
import { Button } from "./ui/Button";
import { InteractiveGrid } from "./ui/InteractiveGrid";
import { ShineBorder } from "./ui/ShineBorder";
import { Play } from "lucide-react";

export function HeroSection({ scrollTargets }) {
    return (
        <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black">
            <Header scrollTargets={scrollTargets} />
            <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

            <ShineBorder
                className="relative z-10 max-w-6xl mx-auto px-6"
                borderClassName="border border-white/10 rounded-xl overflow-hidden"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        Join 
                        <span className="text-[var(--secondary-color)]"> fit Connect </span> 
                        to transform your journey
                                           
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        The pain you feet today is the strength you feet tomorrow
                        share while maintaining full control over your privacy.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10">
                            <Play className="w-4 h-4" />
                            Demo
                        </Button>
                        <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                            Download
                        </Button>
                    </div>
                </div>

                <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
                    <div className="relative">
                        <img
                            src="../../public/gymbg2.jpg"
                            alt="Background Gradient"
                            className="w-full h-auto"
                        />
                        {/* <div className="absolute inset-0 flex items-end justify-center pb-16">
                            <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl w-[90%] h-[70%] flex">
                                <div className="flex-1 pr-2">
                                    <img
                                        src=""
                                        alt="Browser Preview"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex-1 pl-2">
                                    <img
                                        src=""
                                        alt="Code Editor"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div> */}  
                    </div>
                </ShineBorder>
            </ShineBorder>
        </section>
    );
}
