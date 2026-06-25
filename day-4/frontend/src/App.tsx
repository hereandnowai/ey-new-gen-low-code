import { useState } from 'react';
import './App.css';

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { text: input, sender: "user"};
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5002/chat-with-memory", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ messages: updatedMessages })
      });

      const data = await response.json();
      const botMessage: Message = { text: data.reply || "No reply received", sender: "bot"};
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { text: "Error: No server connection.", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <h2>Caramel AI</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
          <span className="sender-tag">{msg.sender === "user" ? "You" : "AI"}</span>
          <p className="message-text">{msg.text}</p>
        </div>
        ))}
        { loading && <div className="message bot loading">AI is typing...</div> }
      </div>
      <div className="input-area">
         <input
         type="text"
         value={input}
         onChange={(e) => setInput(e.target.value)}
         placeholder="Type your message..."
         onKeyDown={(e) => e.key === "Enter" && sendMessage()}
         />
        <button onClick={sendMessage} disabled={loading}>Send</button> 
      </div>

    </div>
  )
  }
