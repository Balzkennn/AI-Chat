import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/login.jsx";
import ChatPage from "../pages/ai-chat/ai-chat.jsx";

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
