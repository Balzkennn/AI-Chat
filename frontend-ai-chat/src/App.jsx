import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import AiChat from "./pages/ai-chat/ai-chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<AiChat />} />
        {/* Bisa tambahkan route lain sesuai kebutuhan */}
      </Routes>
    </Router>
  );
}

export default App;