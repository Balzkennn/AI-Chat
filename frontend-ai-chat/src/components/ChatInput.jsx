import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = () => {
  return (
    <div className="px-6 py-4 border-t border-gray-700">
      <div className="relative">
        <input type="text" placeholder="Ask anything" className="w-full p-4 pr-12 rounded-xl bg-[#40414F] text-white focus:outline-none" />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
