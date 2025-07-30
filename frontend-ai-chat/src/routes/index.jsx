import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/login";
import AiChat from "../pages/ai-chat/AiChat";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<AiChat />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
