// src/routes/index.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import ChatPage from "../pages/ai-chat/ChatPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
