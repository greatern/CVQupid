import React from "react";
import { Container, Card, PrimaryButton } from "../../components/Layout";
import { THEME } from "../../theme";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

/**
 * PsychometricResults.tsx
 * Full breakdown for psychometric test:
 * - Section progress bars (numerical, verbal, logical)
 * - Personality trait cards (Big Five style)
 * - Interpretation / insights
 * - Career recommendations
 * - Download PDF (simulated)
 */

export default function PsychometricResults(): JSX.Element {
  const nav = useNavigate();

  // Mock detailed results
  const breakdown = [
    { name: "Numerical Reasoning", score: 78 },
    { name: "Verbal Reasoning", score: 65 },
    { name: "Logical Reasoning", score: 89 },
  ];

  const traits = [
    { name: "Openness", label: "High" },
    { name: "Conscientiousness", label: "Medium" },
    { name: "Extraversion", label: "Low" },
    { name: "Agreeableness", label: "High" },
    { name: "Neuroticism", label: "Low" },
  ];

  const insights = [
    { title: "Strong Analytical Ability", text: "Your high logical reasoning indicates strong problem solving skills — a good fit for tech and analyst roles." },
    { title: "Calm Under Pressure", text: "Low neuroticism suggests you stay composed under stressful conditions." },
    { title: "Collaborative Communicator", text: "Good verbal and communication skills make you suitable for team-based roles." },
  ];

  const recommendations = ["Software Developer (entry)", "Systems Analyst (junior)", "Data Technician", "QA Tester"];

  const downloadPDF = () => {
    // Simulated PDF content
    const content = [
      "Psychometric Detailed Report",
      "",
      "Breakdown:",
      ...breakdown.map(b => `${b.name}: ${b.score}%`),
      "",
      "Traits:",
      ...traits.map(t => `${t.name}: ${t.label}`),
      "",
      "Insights:",
      ...insights.map(i => `- ${i.title}: ${i.text}`),
      "",
      "Recommendations:",
      ...recommendations,
    ].join("\n");

    const blob = new Blob([content], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `psychometric_detailed_report.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(180deg, ${THEME.primaryLight}, #fff)`, padding: 28 }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0 }}>Psychometric Results</h1>
            <div style={{ color: THEME.muted, marginTop: 6 }}>Detailed breakdown to help you understand your strengths and career fit.</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <PrimaryButton onClick={() => nav("/candidate-profile")}>Back to Profile</PrimaryButton>
            <PrimaryButton onClick={downloadPDF}>Download PDF</PrimaryButton>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20, marginTop: 22 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Card>
              <h3 style={{ marginTop: 0 }}>Score Breakdown</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {breakdown.map(b => (
                  <div key={b.name}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div style={{ fontWeight: 700 }}>{b.name}</div>
                      <div style={{ color: THEME.muted }}>{b.score}%</div>
                    </div>
                    <div style={{ height: 10, background: "#eee", borderRadius: 8, marginTop: 6 }}>
                      <div style={{ width: `${b.score}%`, height: "100%", background: THEME.primary, borderRadius: 8 }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 style={{ marginTop: 0 }}>Personality Traits</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {traits.map(t => (
                  <div key={t.name} style={{ minWidth: 140, padding: 12, borderRadius: 10, background: THEME.accentBlue + "20" }}>
                    <div style={{ fontWeight: 700 }}>{t.name}</div>
                    <div style={{ color: THEME.muted, marginTop: 6 }}>{t.label}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 style={{ marginTop: 0 }}>Interpretation & Insights</h3>
              <div style={{ display: "grid", gap: 10 }}>
                {insights.map(i => (
                  <div key={i.title}>
                    <div style={{ fontWeight: 700 }}>{i.title}</div>
                    <div style={{ color: THEME.muted }}>{i.text}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 style={{ marginTop: 0 }}>Career Recommendations</h3>
              <div style={{ display: "grid", gap: 8 }}>
                {recommendations.map(r => (
                  <div key={r} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700 }}>{r}</div>
                    <button onClick={() => alert(`Saved job recommendation: ${r} (simulated)`)} style={{ padding: 8, borderRadius: 8 }}>Save</button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Card>
              <h4 style={{ marginTop: 0 }}>Summary</h4>
              <div style={{ color: THEME.muted }}>Overall Score: <strong>78%</strong></div>
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, color: THEME.muted }}>Top Strengths</div>
                <div style={{ fontWeight: 700 }}>Logical Reasoning, Communication</div>
              </div>
              <div style={{ marginTop: 10 }}>
                <PrimaryButton onClick={downloadPDF}>Download Report</PrimaryButton>
              </div>
            </Card>

            <Card>
              <h4 style={{ marginTop: 0 }}>Next Steps</h4>
              <div style={{ display: "grid", gap: 8 }}>
                <button onClick={() => alert("Enroll in recommended course (simulated)")} style={{ padding: 10, borderRadius: 8 }}>Enroll to Improve Skills</button>
                <button onClick={() => alert("Request mentor (simulated)")} style={{ padding: 10, borderRadius: 8 }}>Request Mentor</button>
              </div>
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
}
