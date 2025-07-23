import { useState } from "react";
import { FaPlus, FaSearch, FaBook, FaRocket, FaRobot, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`h-screen flex flex-col justify-between transition-all duration-300 ${isOpen ? "w-60" : "w-16"} bg-[#1f1f1f] text-white shadow-lg`}>
      <div className="flex flex-col p-4 h-full">
        {/* Toggle Button */}
        <button onClick={toggleSidebar} className="mb-6 text-gray-300 hover:text-white transition-transform duration-300">
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        {/* Logo */}
        {isOpen && <h1 className="text-xl font-semibold text-center mb-6 tracking-wide">ChatGPT</h1>}

        {/* New Chat Button */}
        <button className="flex items-center gap-2 text-sm bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-900 transition w-full mb-6">
          <FaPlus />
          {isOpen && "New Chat"}
        </button>

        {/* Menu List */}
        <div className="flex-1 space-y-1 overflow-y-auto">
          <MenuItem icon={<FaSearch />} label="Search" isOpen={isOpen} active />
          <MenuItem icon={<FaBook />} label="Library" isOpen={isOpen} />
          <MenuItem icon={<FaRocket />} label="Sora" isOpen={isOpen} />
          <MenuItem icon={<FaRobot />} label="GPTs" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

// Komponen Menu Item
function MenuItem({ icon, label, isOpen, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md cursor-pointer transition-colors duration-200 ${active ? "bg-[#3b3b3b] text-white" : "text-gray-400 hover:bg-[#2e2e2e] hover:text-white"}`}>
      <span className="text-lg">{icon}</span>
      {isOpen && <span>{label}</span>}
    </div>
  );
}
