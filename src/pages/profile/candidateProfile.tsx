import React from "react";
import { Container, Card, PrimaryButton } from "../../components/Layout";
import { THEME } from "../../theme";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

/**
 * CandidateProfile.tsx
 * Extended with:
 * - Profile picture instead of initials
 * - Current Skills section (mock data)
 */

export default function CandidateProfile(): JSX.Element {
  const nav = useNavigate();

  // Mock candidate data (replace with API)
  const candidate = {
    id: 101,
    name: "Alicia Phiri",
    email: "alicia@example.com",
    phone: "+27 82 555 1234",
    city: "Johannesburg",
    nqfLevel: "Level 4",
    degree: "N/A",
    profilePicture:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress",
    summary:
      "Job-ready candidate focusing on customer service and entry-level IT roles. Completed several training modules and ready to match with mentors.",
  };

  // NEW: Mock candidate skills
  const candidateSkills = [
    "Customer Service",
    "Basic Computer Literacy",
    "Microsoft Office",
    "Communication",
    "Problem Solving",
  ];

  // Mock psychometric summary (you'd fetch this)
  const psychSummary = {
    overallScore: 78,
    stars: 4,
    strengths: ["Logical Reasoning", "Communication"],
    personalityLabel: "Analytical Collaborator",
    completedAt: "2025-11-30",
  };

  const downloadReport = () => {
    const content = [
      `Psychometric Report — ${candidate.name}`,
      `Completed: ${psychSummary.completedAt}`,
      `Overall Score: ${psychSummary.overallScore}`,
      `Personality: ${psychSummary.personalityLabel}`,
      `Strengths: ${psychSummary.strengths.join(", ")}`,
      ``,
      `Interpretation:`,
      `- High logical reasoning and communication — strong fit for analytical team roles.`,
    ].join("\n");

    const blob = new Blob([content], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${candidate.name.replace(/\s+/g, "_")}_psychometric_report.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const retakeTest = () => {
    alert("Retake flow started (simulated). Redirecting to assessment...");
    nav("/assessment");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(180deg, ${THEME.primaryLight}, #fff)`,
        padding: 28,
      }}
    >
      <Container>
        {/* header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div>
            <h1 style={{ margin: 0 }}>Candidate Profile</h1>
            <div style={{ color: THEME.muted, marginTop: 6 }}>
              View and manage your profile
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <PrimaryButton onClick={() => nav("/dashboard/candidate")}>
              Back to Dashboard
            </PrimaryButton>
            <PrimaryButton onClick={() => nav("/course-library")}>
              Course Library
            </PrimaryButton>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 20,
            marginTop: 22,
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* ====================== */}
            {/* PROFILE INFORMATION    */}
            {/* ====================== */}
            <Card>
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "center",
                }}
              >
                {/* NEW — REAL PROFILE PHOTO */}
                <img
                  src={candidate.profilePicture}
                  alt="profile"
                  style={{
                    width: 92,
                    height: 92,
                    borderRadius: 18,
                    objectFit: "cover",
                  }}
                />

                <div>
                  <div style={{ fontWeight: 800, fontSize: 18 }}>
                    {candidate.name}
                  </div>
                  <div style={{ color: THEME.muted }}>
                    {candidate.nqfLevel} • {candidate.city}
                  </div>
                  <div style={{ marginTop: 8 }}>{candidate.summary}</div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 16,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                }}
              >
                <div>
                  <div style={{ fontSize: 12, color: THEME.muted }}>Email</div>
                  <div style={{ fontWeight: 700 }}>{candidate.email}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: THEME.muted }}>Phone</div>
                  <div style={{ fontWeight: 700 }}>{candidate.phone}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: THEME.muted }}>Degree</div>
                  <div style={{ fontWeight: 700 }}>{candidate.degree}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: THEME.muted }}>City</div>
                  <div style={{ fontWeight: 700 }}>{candidate.city}</div>
                </div>
              </div>
            </Card>

            {/* ====================== */}
            {/* NEW: CURRENT SKILLS   */}
            {/* ====================== */}
            <Card>
              <h3 style={{ marginTop: 0, marginBottom: 8 }}>Current Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {candidateSkills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      background: THEME.primaryLight,
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      color: THEME.dark,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>

            {/* ====================== */}
            {/* PSYCHOMETRIC SUMMARY  */}
            {/* ====================== */}
            <Card>
              <div
                style={{ display: "flex", justifyContent: "space-between", gap: 12 }}
              >
                <div>
                  <h3 style={{ marginTop: 0 }}>Psychometric Assessment</h3>
                  <div style={{ color: THEME.muted }}>
                    Completed: {psychSummary.completedAt}
                  </div>

                  <div
                    style={{
                      marginTop: 12,
                      display: "flex",
                      alignItems: "center",
                      gap: 18,
                    }}
                  >
                    <div style={{ width: 92, height: 92 }}>
                      {/* Circular progress */}
                      <svg viewBox="0 0 36 36" style={{ width: 92, height: 92 }}>
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 
                             a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#eee"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 
                             a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={THEME.primary}
                          strokeWidth="3"
                          strokeDasharray={`${psychSummary.overallScore} ${
                            100 - psychSummary.overallScore
                          }`}
                          strokeDashoffset="25"
                          strokeLinecap="round"
                        />
                        <text
                          x="18"
                          y="20.5"
                          fontSize="4"
                          textAnchor="middle"
                          fill={THEME.dark}
                        >
                          {psychSummary.overallScore}%
                        </text>
                      </svg>
                    </div>

                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>
                        {psychSummary.personalityLabel}
                      </div>
                      <div style={{ color: THEME.muted, marginTop: 6 }}>
                        Strengths: {psychSummary.strengths.join(", ")}
                      </div>

                      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                        <PrimaryButton onClick={() => nav("/psychometrics")}>
                          View Results
                        </PrimaryButton>
                        <button
                          onClick={downloadReport}
                          style={{
                            padding: "10px 12px",
                            borderRadius: 8,
                            border: "1px solid rgba(0,0,0,0.08)",
                            background: "#fff",
                          }}
                        >
                          Download PDF
                        </button>
                        <button
                          onClick={retakeTest}
                          style={{
                            padding: "10px 12px",
                            borderRadius: 8,
                            background: THEME.accentPink,
                          }}
                        >
                          Retake Test
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* small stats */}
                <div
                  style={{
                    minWidth: 180,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      padding: 10,
                      borderRadius: 10,
                      background: THEME.accentGreen + "22",
                    }}
                  >
                    <div style={{ fontSize: 12, color: THEME.muted }}>
                      Overall Score
                    </div>
                    <div style={{ fontWeight: 700 }}>
                      {psychSummary.overallScore}%
                    </div>
                  </div>

                  <div
                    style={{
                      padding: 10,
                      borderRadius: 10,
                      background: THEME.accentBlue + "20",
                    }}
                  >
                    <div style={{ fontSize: 12, color: THEME.muted }}>
                      Strengths
                    </div>
                    <div style={{ fontWeight: 700 }}>
                      {psychSummary.strengths[0]}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: 10,
                      borderRadius: 10,
                      background: THEME.accentPink + "22",
                    }}
                  >
                    <div style={{ fontSize: 12, color: THEME.muted }}>
                      Personality
                    </div>
                    <div style={{ fontWeight: 700 }}>
                      {psychSummary.personalityLabel}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <aside
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <Card>
              <h4 style={{ marginTop: 0 }}>Quick Links</h4>
              <div style={{ display: "grid", gap: 8 }}>
                <button
                  onClick={() => nav("/dashboard/candidate")}
                  style={{ padding: 10, borderRadius: 8 }}
                >
                  Back to Dashboard
                </button>
                <button
                  onClick={() => nav("/courses")}
                  style={{ padding: 10, borderRadius: 8 }}
                >
                  Course Library
                </button>
                <button
                  onClick={() => nav("/chat")}
                  style={{ padding: 10, borderRadius: 8 }}
                >
                  Open Chatroom
                </button>
              </div>
            </Card>

            <Card>
              <h4 style={{ marginTop: 0 }}>Assessment</h4>
              <div style={{ color: THEME.muted, fontSize: 13 }}>
                Want a detailed PDF report of your assessment? Use the button
                below.
              </div>
              <div style={{ marginTop: 10 }}>
                <button
                  onClick={downloadReport}
                  style={{
                    padding: 10,
                    borderRadius: 8,
                    width: "100%",
                    background: THEME.primary,
                  }}
                >
                  Download Full Report (PDF)
                </button>
              </div>
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
}
