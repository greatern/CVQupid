import React, { useState } from "react";
import { Container, Card, PrimaryButton } from "../components/Layout";
import { THEME } from "../theme";
import { useNavigate, useParams } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

type Skill = { name: string; level: number };
type Course = { name: string; completed: boolean };
type PsychometricResult = { test: string; score: number };

export default function MentorCandidateProfile(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<
    "all" | "profile" | "courses" | "skills" | "psychometrics" | "analytics" | "mentor-psychometrics"
  >("all");

  // Dummy candidate data
  const candidate = {
    name: "Lindiwe M",
    readiness: 78,
    courses: [
      { name: "React Basics", completed: true },
      { name: "SQL for Beginners", completed: true },
      { name: "Customer Service Essentials", completed: false },
    ] as Course[],
    softSkills: [
      { name: "Communication", level: 80 },
      { name: "Teamwork", level: 70 },
    ] as Skill[],
    technicalSkills: [
      { name: "React", level: 75 },
      { name: "SQL", level: 60 },
    ] as Skill[],
    psychometric: [
      { test: "Cognitive Ability", score: 85 },
      { test: "Personality Fit", score: 90 },
    ] as PsychometricResult[],
    cvUrl: "/dummy-cv.pdf",
    analytics: {
      sessionsAttended: 3,
      averageScore: 78,
    },
    // New mentor-focused psychometric info
    mentorPsychometrics: {
      cognitiveAbility: "High",
      problemSolving: "Strong",
      workStyle: "Detail-oriented, Reliable",
      teamPreference: "Independent worker",
      recommendedRoles: ["Junior Developer", "Support Technician", "Data Assistant"],
      workBehaviorProfile: [
        { trait: "Attention to Detail", level: "Excellent" },
        { trait: "Time Management", level: "Good" },
        { trait: "Communication", level: "Good" },
        { trait: "Adaptability", level: "Excellent" },
      ],
      fitScore: {
        "Software Support": 87,
        "Front-end Dev": 69,
        "Business Analysis": 74,
      },
    },
  };

  const handleInterested = () => {
    alert(`Marked ${candidate.name} as interested (simulated)`);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = candidate.cvUrl;
    link.download = `${candidate.name}-CV.pdf`;
    link.click();
  };

  const renderProfile = () => (
    <Card style={{ marginBottom: 12 }}>
      <h3 style={{ marginTop: 0 }}>{candidate.name}</h3>
      <div style={{ color: THEME.muted, marginBottom: 12 }}>Readiness: {candidate.readiness}%</div>
      <PrimaryButton onClick={downloadCV} style={{ marginBottom: 12 }}>
        Download CV
      </PrimaryButton>
      <PrimaryButton onClick={handleInterested} style={{ width: "100%" }}>
        Interested
      </PrimaryButton>
    </Card>
  );

  const renderCourses = () => (
    <Card style={{ marginBottom: 12 }}>
      <h3 style={{ marginTop: 0 }}>Courses Completed</h3>
      <ul style={{ margin: 0, paddingLeft: 16 }}>
        {candidate.courses.map((c) => (
          <li key={c.name} style={{ color: c.completed ? THEME.primary : THEME.muted }}>
            {c.name} {c.completed ? "✔" : "❌"}
          </li>
        ))}
      </ul>
    </Card>
  );

  const renderSkills = () => (
    <>
      <Card style={{ marginBottom: 12 }}>
        <h4 style={{ marginTop: 0 }}>Soft Skills</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {candidate.softSkills.map((s) => (
            <div
              key={s.name}
              style={{
                padding: 8,
                borderRadius: 8,
                background: THEME.accentBlue,
                color: "#fff",
                minWidth: 90,
              }}
            >
              <div style={{ fontWeight: 700 }}>{s.name}</div>
              <div style={{ fontSize: 12 }}>Level: {s.level}%</div>
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ marginBottom: 12 }}>
        <h4 style={{ marginTop: 0 }}>Technical Skills</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {candidate.technicalSkills.map((s) => (
            <div
              key={s.name}
              style={{
                padding: 8,
                borderRadius: 8,
                background: THEME.accentPink,
                color: "#fff",
                minWidth: 90,
              }}
            >
              <div style={{ fontWeight: 700 }}>{s.name}</div>
              <div style={{ fontSize: 12 }}>Level: {s.level}%</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );

const renderPsychometrics = () => (
  <Card style={{ marginBottom: 12 }}>
    <h3 style={{ marginTop: 0 }}>Psychometric Results</h3>
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
      {candidate.psychometric.map((p) => (
        <div
          key={p.test}
          style={{
            width: 120,
            height: 120,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <svg width="120" height="120">
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke={THEME.muted + "40"}
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke={THEME.primary}
              strokeWidth="10"
              fill="none"
              strokeDasharray={2 * Math.PI * 50}
              strokeDashoffset={2 * Math.PI * 50 * (1 - p.score / 100)}
              transform="rotate(-90 60 60)"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ position: "absolute", fontWeight: 700, fontSize: 16 }}>
            {p.score}%
          </div>
          <div style={{ marginTop: 8, textAlign: "center" }}>{p.test}</div>
        </div>
      ))}
    </div>
  </Card>
);


// ✅ Mentor / Company View with charts & metrics
const renderMentorPsychometrics = () => {
  const m = candidate.mentorPsychometrics;
  return (
    <Card style={{ marginBottom: 12 }}>
      <h3 style={{ marginTop: 0 }}>Mentor / Company Psychometric Summary</h3>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {/* Cognitive Ability */}
        <MetricCard label="Cognitive Ability" value={m.cognitiveAbility} color={THEME.primary} />
        {/* Problem Solving */}
        <MetricCard label="Problem Solving" value={m.problemSolving} color={THEME.accentBlue} />
        {/* Work Style */}
        <MetricCard label="Work Style" value={m.workStyle} color={THEME.accentPink} />
        {/* Team Preference */}
        <MetricCard label="Team Preference" value={m.teamPreference} color={THEME.accentYellow} />
      </div>

      <h4 style={{ marginTop: 16 }}>Recommended Roles</h4>
      <ul style={{ display: "flex", gap: 12, flexWrap: "wrap", listStyle: "none", padding: 0 }}>
        {m.recommendedRoles.map((r) => (
          <li
            key={r}
            style={{
              padding: "6px 12px",
              background: THEME.primary,
              color: "#fff",
              borderRadius: 8,
            }}
          >
            {r}
          </li>
        ))}
      </ul>

      <h4 style={{ marginTop: 16 }}>Work Behavior Profile</h4>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {m.workBehaviorProfile.map((w) => (
          <div
            key={w.trait}
            style={{
              flex: 1,
              minWidth: 120,
              background: "#f7f7f7",
              padding: 12,
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 12, color: THEME.muted }}>{w.trait}</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{w.level}</div>
          </div>
        ))}
      </div>

      <h4 style={{ marginTop: 16 }}>Role Fit Scores</h4>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {Object.entries(m.fitScore).map(([role, score]) => (
          <div key={role} style={{ flex: 1, minWidth: 120 }}>
            <div style={{ fontSize: 12, color: THEME.muted }}>{role}</div>
            <div style={{ fontWeight: 700 }}>{score}%</div>
            <div style={{ background: "#eee", borderRadius: 8, height: 8, marginTop: 4 }}>
              <div
                style={{
                  width: `${score}%`,
                  background: THEME.accentBlue,
                  height: "100%",
                  borderRadius: 8,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ✅ Helper metric card component
const MetricCard = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div
    style={{
      flex: 1,
      minWidth: 120,
      background: color + "20",
      padding: 12,
      borderRadius: 8,
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: 12, color: THEME.muted }}>{label}</div>
    <div style={{ fontSize: 16, fontWeight: 700 }}>{value}</div>
  </div>
);

const renderAnalytics = () => (
  <Card style={{ marginBottom: 12 }}>
    <h3 style={{ marginTop: 0 }}>Analytics & Performance</h3>
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
      {/* Sessions Attended */}
      <div style={{ flex: 1, minWidth: 150 }}>
        <div style={{ fontSize: 12, color: THEME.muted }}>Sessions Attended</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>{candidate.analytics.sessionsAttended}</div>
        <div style={{ background: "#eee", borderRadius: 8, height: 8, marginTop: 4 }}>
          <div
            style={{
              width: `${(candidate.analytics.sessionsAttended / 5) * 100}%`,
              background: THEME.primary,
              height: "100%",
              borderRadius: 8,
            }}
          />
        </div>
      </div>

      {/* Average Score */}
      <div style={{ flex: 1, minWidth: 150 }}>
        <div style={{ fontSize: 12, color: THEME.muted }}>Average Score</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>{candidate.analytics.averageScore}%</div>
        <div style={{ background: "#eee", borderRadius: 8, height: 8, marginTop: 4 }}>
          <div
            style={{
              width: `${candidate.analytics.averageScore}%`,
              background: THEME.accentBlue,
              height: "100%",
              borderRadius: 8,
            }}
          />
        </div>
      </div>

      {/* Performance Trend */}
      <div style={{ flex: 2, minWidth: 200 }}>
        <div style={{ fontSize: 12, color: THEME.muted }}>Performance Trend</div>
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <polyline
            fill="none"
            stroke={THEME.primary}
            strokeWidth="3"
            points="0,40 40,30 80,20 120,25 160,18 200,10"
          />
        </svg>
      </div>
    </div>
  </Card>
);

  const renderTabContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <>
            {renderProfile()}
            {renderCourses()}
            {renderSkills()}
            {renderPsychometrics()}
            {renderAnalytics()}
          </>
        );
      case "profile":
        return renderProfile();
      case "courses":
        return renderCourses();
      case "skills":
        return renderSkills();
      case "psychometrics":
        return renderPsychometrics();
      case "mentor-psychometrics":
        return renderMentorPsychometrics();
      case "analytics":
        return renderAnalytics();
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(180deg, ${THEME.primaryLight}, ${THEME.accentPink}10, #fff)`,
        padding: 36,
      }}
    >
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0 }}>Candidate Profile</h1>
            <div style={{ color: THEME.muted }}>View candidate readiness, skills, courses, and analytics.</div>
          </div>
          <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
          {["all", "profile", "courses", "skills", "psychometrics", "mentor-psychometrics", "analytics"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: activeTab === tab ? `2px solid ${THEME.primary}` : "1px solid #ccc",
                background: activeTab === tab ? THEME.primary : "#fff",
                color: activeTab === tab ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>{renderTabContent()}</div>
      </Container>
    </div>
  );
}
