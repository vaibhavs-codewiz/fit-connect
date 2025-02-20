import { useState } from "react";
import { Button } from 'antd';
import RegisterModal from "./RegisterModal";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <span className="text-[#4E3B2A]">🔗</span> {/* Placeholder for Logo Icon */}
        <span className="text-black">Me-Fit</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg font-medium">
        {["Home", "Dashboard", "Gyms"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 ${activeTab === tab ? "font-bold text-black" : "text-gray-500"
              }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#4E3B2A]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-3 flex gap-[30px]">
        
        < RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Button size="large"
          className="!bg-white-600 !text-black hover:!text-white hover:!border-[#bcb293] hover:!bg-[#bcb293]"
        >Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
