import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  // простой эхо-бот
  const reply = `Вы сказали: "${message}"`;

  res.json({ reply });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));