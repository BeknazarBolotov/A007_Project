import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css"; // твой CSS

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      // здесь запрос к твоему серверу
      const response = await axios.post("http://localhost:5000/api/chat", { message: input });
      const botMessage = { text: response.data.reply, sender: "bot" };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      const botMessage = { text: "Произошла ошибка. Попробуйте позже.", sender: "bot" };
      setMessages(prev => [...prev, botMessage]);
    }
  };

  // прокрутка вниз при новом сообщении
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // отправка по Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
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
          <div className="chat-header">Чат с ботом</div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Введите сообщение..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={sendMessage}>Отправить</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;