// src/api/chatApi.js
export const sendMessageToBot = async (message) => {
  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("Ошибка чата:", error);
    return "Извини, я не могу сейчас ответить.";
  }
};