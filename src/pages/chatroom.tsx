// src/pages/ChatRoom.tsx
import React, { useState, useRef, useEffect } from "react";
import { Container, Card, PrimaryButton } from "../components/Layout";
import { THEME } from "../theme";

type Message = {
  id: number;
  sender: "candidate" | "mentor";
  text: string;
  timestamp: string;
};

export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "mentor", text: "Hello! I see you completed the required courses.", timestamp: "10:00 AM" },
    { id: 2, sender: "candidate", text: "Yes, I’m ready to start discussing career opportunities!", timestamp: "10:02 AM" },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: messages.length + 1,
      sender: "candidate",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc", padding: 28 }}>
      <Container>
        <h1>Mentor Chatroom</h1>
        <p style={{ color: THEME.muted }}>Interact with your mentor here once matched.</p>

        <Card style={{ display: "flex", flexDirection: "column", height: "70vh", padding: 16 }}>
          {/* Chat Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.sender === "candidate" ? "flex-end" : "flex-start",
                  marginBottom: 12,
                }}
              >
                <div style={{
                  background: msg.sender === "candidate" ? THEME.accentPink: THEME.accentBlue,
                  color: "#012",
                  padding: "8px 12px",
                  borderRadius: 12,
                  maxWidth: "70%",
                  wordBreak: "break-word"
                }}>
                  {msg.text}
                </div>
                <span style={{ fontSize: 10, color: THEME.muted, marginTop: 2 }}>{msg.timestamp}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid rgba(0,0,0,0.15)" }}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <PrimaryButton onClick={sendMessage}>Send</PrimaryButton>
          </div>
        </Card>
      </Container>
    </div>
  );
}
