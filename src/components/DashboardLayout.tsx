import React from "react";
import { THEME } from "../theme";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function DashboardLayout({ title, children }: Props) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f7f7fb" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: 240,
          background: THEME.primary,
          color: "#fff",
          padding: "20px 14px",
        }}
      >
        <h3 style={{ marginBottom: 30 }}>{title}</h3>
        <nav style={{ display: "grid", gap: 10 }}>
          <a style={linkStyle}>Dashboard</a>
          <a style={linkStyle}>Messages</a>
          <a style={linkStyle}>Settings</a>
          <a style={linkStyle}>Logout</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: "30px" }}>
        {children}
      </main>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  padding: "12px 10px",
  borderRadius: 8,
  cursor: "pointer",
  background: "rgba(255,255,255,0.1)",
};
