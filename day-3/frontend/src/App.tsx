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
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ message: input })
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

  }

