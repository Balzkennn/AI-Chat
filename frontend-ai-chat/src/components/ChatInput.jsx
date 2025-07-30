import React, { useState } from "react";
import axios from "axios";

const ChatInput = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/chat", // Ganti sesuai URL backend kamu
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResponse(res.data.reply);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setResponse("Gagal mendapatkan balasan dari AI.");
    } finally {
      setLoading(false);
      setPrompt("");
    }
  };

  return (
    <div className="p-4 border-t border-gray-800">
      <div className="flex">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Tanya sesuatu..."
          className="flex-1 p-3 rounded bg-gray-900 text-white outline-none"
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-3 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "..." : "Kirim"}
        </button>
      </div>

      {response && (
        <div className="mt-4 p-4 bg-gray-900 rounded text-white">
          <strong>Balasan AI:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
