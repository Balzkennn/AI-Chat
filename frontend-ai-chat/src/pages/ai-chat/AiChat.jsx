import React from "react";
import SideBar from "../../components/SideBar";
import ChatInput from "../../components/ChatInput";
import Login from "../login/login";

const AiChat = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex justify-center items-center py-6 text-2xl font-medium border-b border-gray-800">What can I help with?</div>

        {/* Middle content */}
        <div className="flex-1 flex items-center justify-center text-xl text-gray-400">Ask anything</div>

        {/* Chat input */}
        <ChatInput />

        <Login />
      </div>
    </div>
  );
};

export default AiChat;
