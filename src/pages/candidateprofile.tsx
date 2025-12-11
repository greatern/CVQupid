import React from "react";
import { Container, Card, PrimaryButton } from "../components/Layout";
import { THEME } from "../theme";

export default function CandidateDashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${THEME.accentBlue}, ${THEME.accentGreen})`,
        paddingBottom: 60,
        position: "relative",
      }}
    >
      <Container>

        {/* -------- HEADER -------- */}
        <div
          style={{
            marginTop: 40,
            marginBottom: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ margin: 0 }}>Welcome back, Candidate 👋</h1>
            <p style={{ color: THEME.dark }}>Here is your job-readiness overview.</p>
          </div>

          <PrimaryButton style={{ width: 200 }}>Update CV</PrimaryButton>
        </div>

        {/* -------- GRID LAYOUT -------- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 24,
            alignItems: "flex-start",
          }}
        >

          {/* ---------- LEFT COLUMN ---------- */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* ---- PROGRESS CARD ---- */}
            <Card style={{ backdropFilter: "blur(10px)" }}>
              <h3>Job-Readiness Progress</h3>
              <div style={{ marginTop: 12 }}>
                <div
                  style={{
                    height: 12,
                    background: "#eee",
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "65%",
                      height: "100%",
                      background: THEME.primary,
                      borderRadius: 20,
                      transition: "0.3s",
                    }}
                  />
                </div>
                <p style={{ marginTop: 8 }}>65% Complete — keep going! 🎯</p>
              </div>
            </Card>

            {/* ---- SKILLS CARD ---- */}
            <Card>
              <h3>Skills Tracker</h3>
              <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 12 }}>
                {["Java", "SQL", "Communication", "Teamwork", "Leadership", "React"].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 20,
                      background: THEME.accentPink,
                      fontSize: 14,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <PrimaryButton style={{ marginTop: 16, width: 180 }}>
                Improve Skills
              </PrimaryButton>
            </Card>

            {/* ---- RECOMMENDED COMPANIES ---- */}
            <Card>
              <h3>Recommended Companies</h3>
              <div style={{ marginTop: 14, display: "grid", gap: 12 }}>
                {["NPI Governance Consulting", "Discovery", "FNB", "Takealot"].map((c) => (
                  <div
                    key={c}
                    style={{
                      padding: 14,
                      borderRadius: 10,
                      background: THEME.accentYellow,
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </Card>

          </div>

          {/* ---------- RIGHT COLUMN ---------- */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* ---- MENTOR SUGGESTIONS ---- */}
            <Card>
              <h3>Mentor Suggestions</h3>

              {[
                { name: "Thandi M.", field: "Software Engineer" },
                { name: "Joel K.", field: "Data Analyst" },
              ].map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    marginTop: 14,
                    padding: 14,
                    borderRadius: 12,
                    background: THEME.accentBlue,
                  }}
                >
                  <strong>{m.name}</strong>
                  <p style={{ margin: "4px 0", color: THEME.dark }}>{m.field}</p>
                  <PrimaryButton style={{ marginTop: 4 }}>Chat</PrimaryButton>
                </div>
              ))}
            </Card>

            {/* ---- SAVED JOBS ---- */}
            <Card>
              <h3>Saved Jobs</h3>
              <ul style={{ marginTop: 12, paddingLeft: 18 }}>
                <li>Junior IT Technician — FNB</li>
                <li>Graduate Developer — Capitec</li>
                <li>Intern Data Scientist — Discovery</li>
              </ul>
            </Card>

          </div>

        </div>
      </Container>
    </div>
  );
}
