exports.handleChat = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt tidak boleh kosong" });
  }

  try {
    // Di sini kamu bisa pakai API AI kamu, misalnya fetch ke LM Studio, OpenAI, DeepSeek, dsb
    // Contoh dummy:
    const aiResponse = `Hai ${req.user.userName}, kamu bertanya: "${prompt}"`;

    res.status(200).json({ reply: aiResponse });
  } catch (err) {
    console.error("AI ERROR:", err.message);
    res.status(500).json({ message: "Gagal memproses permintaan AI" });
  }
};
