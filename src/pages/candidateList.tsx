import React, { useState } from "react";
import { Container, Card, PrimaryButton } from "../components/Layout";
import { THEME } from "../theme";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

type Candidate = {
  id: string;
  name: string;
  profilePic: string;
  readiness: number;
  bio: string;
};

export default function CandidateList(): JSX.Element {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy candidate data
  const candidates: Candidate[] = [
    {
      id: "1",
      name: "Lindiwe M",
      profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
      readiness: 78,
      bio: "Aspiring front-end developer with strong React and SQL skills.",
    },
    {
      id: "2",
      name: "Thabo K",
      profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
      readiness: 85,
      bio: "Analytical thinker interested in data analytics and software testing.",
    },
    {
      id: "3",
      name: "Nomsa P",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      readiness: 65,
      bio: "Customer-focused candidate with experience in service management.",
    },
      {
    id: "4",
    name: "Sipho D",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
    readiness: 72,
    bio: "Junior developer passionate about front-end frameworks and UX design.",
  },
  {
    id: "5",
    name: "Zanele T",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
    readiness: 80,
    bio: "Data enthusiast skilled in Python, SQL, and basic machine learning.",
  },
    {
      id: "6",
      name: "Unathi M",
      profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
      readiness: 78,
      bio: "Aspiring front-end developer with strong React and SQL skills.",
    },
    {
      id: "7",
      name: "Rage K",
      profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
      readiness: 85,
      bio: "Analytical thinker interested in data analytics and software testing.",
    },
    {
      id: "8",
      name: "Neo P",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      readiness: 65,
      bio: "Customer-focused candidate with experience in service management.",
    },
      {
    id: "9",
    name: "thato M",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
    readiness: 72,
    bio: "Junior developer passionate about front-end frameworks and UX design.",
  },
  {
    id: "10",
    name: "Naledi T",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
    readiness: 80,
    bio: "Data enthusiast skilled in Python, SQL, and basic machine learning.",
  },
  ];

  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(180deg, ${THEME.primaryLight}, #fff)`,
        padding: 36,
      }}
    >
      <Container>
        <h1 style={{ marginBottom: 16 }}>Registered Candidates</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search candidates by name or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            marginBottom: 24,
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 14,
          }}
        />

        {/* Candidate List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {filteredCandidates.length > 0 ? (
            filteredCandidates.map((c) => (
              <div
                key={c.id}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/mentor-candidateprofile`)}
              >
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: 16,
                  }}
                >
                  <img
                    src={c.profilePic}
                    alt={c.name}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `2px solid ${THEME.primary}`,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{c.name}</div>
                    <div style={{ fontSize: 14, color: THEME.muted }}>{c.bio}</div>
                  </div>
                  <div
                    style={{
                      background: THEME.accentBlue,
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontWeight: 700,
                    }}
                  >
                    Readiness: {c.readiness}%
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <div style={{ color: THEME.muted }}>No candidates match your search.</div>
          )}
        </div>
      </Container>
    </div>
  );
}

