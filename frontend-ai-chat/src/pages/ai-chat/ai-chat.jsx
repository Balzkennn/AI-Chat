import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import SideBar from "../../components/SideBar";

const AiChat = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex flex-col flex-1">
        <div className="flex justify-center items-center py-6 text-2xl font-medium border-b border-gray-800">What can I help with?</div>

        <div className="flex-1 flex items-center justify-center text-xl text-gray-400">Ask anything</div>

        <div className="px-6 py-4 border-t border-gray-700">
          <div className="relative">
            <input type="text" placeholder="Ask anything" className="w-full p-4 pr-12 rounded-xl bg-[#40414F] text-white focus:outline-none" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
