import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chat_messages");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatBodyRef = useRef(null);

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/chat/",
        { message: input }
      );

      const botMessage = {
        text: response.data.reply,
        sender: "bot"
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (err) {
      const errorMessage = {
        text: "Произошла ошибка. Попробуйте позже.",
        sender: "bot"
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // авто-скролл
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop =
        chatBodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // сохранение истории
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chat_messages");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <>
      <button className="chat-btn" onClick={toggleChat}>
        {open ? "Закрыть чат" : "Чат"}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            Чат с ботом
            <button className="clear-btn" onClick={clearChat}>
              Очистить
            </button>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message bot typing">
                Бот печатает...
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Введите сообщение..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button onClick={sendMessage} disabled={loading}>
              {loading ? "..." : "Отправить"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;