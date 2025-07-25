const fetch = require("node-fetch");

const sendMessage = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer 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`, // Ganti dengan API key kamu
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "qwen/qwen3-235b-a22b-07-25:free",
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message || "Unknown error from OpenRouter" });
    }

    const reply = data.choices?.[0]?.message?.content || "No response";

    res.json({ reply });
  } catch (error) {
    console.error("AI Chat error:", error);
    res.status(500).json({ error: "Something went wrong with OpenRouter" });
  }
};

module.exports = { sendMessage };
