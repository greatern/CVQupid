import React, { useState } from "react";
import { Container, Card, PrimaryButton } from "../../components/Layout";
import { THEME } from "../../theme";
import { useNavigate, Link } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

/**
 * Company Dashboard
 * - Manage job posts & CV templates
 * - See candidate pipeline and readiness analytics
 * - Download candidate CVs, mark interest, report misconduct
 * - Create new job posts (frontend simulation)
 */

type Candidate = {
  id: number;
  name: string;
  role: string;
  readiness: number;
  skills: string[];
};

type Template = { id: number; name: string; fields: string[] };

export default function CompanyDashboard(): JSX.Element {
  const navigate = useNavigate();

  const [candidates, setCandidates] = useState<Candidate[]>([
    { id: 301, name: "Lindiwe M", role: "Junior Dev", readiness: 86, skills: ["HTML","CSS","Basic JS"] },
    { id: 302, name: "Thabo L", role: "Data Analyst Intern", readiness: 72, skills: ["Excel","SQL"] },
    { id: 303, name: "Neo K", role: "Support Technician", readiness: 64, skills: ["Customer Service","Troubleshooting"] },
  ]);

  const [templates, setTemplates] = useState<Template[]>([
    { id: 1, name: "Developer CV", fields: ["personal","education","projects","skills","experience"] },
    { id: 2, name: "Business CV", fields: ["personal","education","experience","skills"] },
  ]);

  const [newTemplateName, setNewTemplateName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobList, setJobList] = useState([{ id: 1, title: "Junior Developer", applicants: 12 }]);

  // actions
  const downloadCandidateCV = (c: Candidate) => {
    const text = `CV of ${c.name}\nRole: ${c.role}\nSkills: ${c.skills.join(", ")}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${c.name.replace(/\s+/g,"_")}_CV.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const markInterested = (id: number) => {
    alert("Marked as interested: candidate " + id);
  };

  const reportCandidate = (id: number) => {
    alert("Reported candidate " + id + " (simulated)");
  };

  const addTemplate = () => {
    if (!newTemplateName.trim()) return alert("Give the template a name");
    setTemplates(t => [...t, { id: Date.now(), name: newTemplateName, fields: ["personal","education"] }]);
    setNewTemplateName("");
  };

  const postJob = () => {
    if (!jobTitle.trim()) return alert("Job title required");
    setJobList(j => [...j, { id: Date.now(), title: jobTitle, applicants: 0 }]);
    setJobTitle("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(180deg, ${THEME.primaryLight}, ${THEME.accentGreen}20, #fff)`,
      padding: 36
    }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0 }}>Company Dashboard</h1>
            <div style={{ color: THEME.muted }}>Manage hiring templates, review candidates & post roles.</div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <PrimaryButton onClick={() => navigate("/explore")}>Discover Talent</PrimaryButton>
            <PrimaryButton onClick={() => alert("Invite a mentor (simulated)")}>Invite Mentor</PrimaryButton>
          </div>
        </div>

        {/* Top stats */}
        <div style={{ display: "flex", gap: 16, marginTop: 20, alignItems: "stretch" }}>
          <Card style={{ flex: 1 }}>
            <h4 style={{ marginTop: 0 }}>Open Roles</h4>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{jobList.length}</div>
            <div style={{ color: THEME.muted }}>Active job listings</div>
          </Card>
          <Card style={{ width: 320 }}>
            <h4 style={{ marginTop: 0 }}>Applicants this month</h4>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{candidates.length * 3}</div>
            <div style={{ color: THEME.muted }}>Total engagement</div>
          </Card>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, marginTop: 18 }}>
          {/* Left: Candidate pipeline */}
          <div>
            <Card>
              <h3 style={{ marginTop: 0 }}>Candidate Pipeline</h3>
              <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
                {candidates.map(c => (
                  <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.6)" }}>
                    <div>
                      <div style={{ fontWeight: 800 }}>{c.name}</div>
                      <div style={{ color: THEME.muted }}>{c.role} • Readiness: {c.readiness}%</div>
                      <div style={{ color: THEME.muted, fontSize: 13 }}>Skills: {c.skills.join(", ")}</div>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => downloadCandidateCV(c)} style={{ padding: "8px 10px", borderRadius: 8 }}>Download CV</button>
                      <button onClick={() => markInterested(c.id)} style={{ padding: "8px 10px", borderRadius: 8, background: THEME.primary }}>Interested</button>
                      <button onClick={() => reportCandidate(c.id)} style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.06)" }}>Report</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div style={{ height: 16 }} />

            <Card>
              <h3 style={{ marginTop: 0 }}>Job Posts</h3>
              <div style={{ display: "grid", gap: 8 }}>
                {jobList.map(j => (
                  <div key={j.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 10, borderRadius: 8, background: "rgba(255,255,255,0.6)" }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>{j.title}</div>
                      <div style={{ color: THEME.muted }}>{j.applicants} applicants</div>
                    </div>
                    <div>
                      <button onClick={() => alert("Open role (simulated)")} style={{ padding: "8px 10px", borderRadius: 8 }}>Manage</button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                <input placeholder="New job title" value={jobTitle} onChange={e=>setJobTitle(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 8 }} />
                <PrimaryButton onClick={postJob}>Post</PrimaryButton>
              </div>
            </Card>
          </div>

          {/* Right: Templates + Analytics */}
          <aside>
            <Card>
              <h4 style={{ marginTop: 0 }}>CV Template Builder</h4>
              <div style={{ display: "grid", gap: 8 }}>
                {templates.map(t => (
                  <div key={t.id} style={{ padding: 8, borderRadius: 8, background: "rgba(255,255,255,0.6)" }}>
                    <div style={{ fontWeight: 700 }}>{t.name}</div>
                    <div style={{ color: THEME.muted, fontSize: 13 }}>{t.fields.join(", ")}</div>
                  </div>
                ))}

                <div style={{ display: "flex", gap: 8 }}>
                  <input placeholder="Template name" value={newTemplateName} onChange={e=>setNewTemplateName(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 8 }} />
                  <PrimaryButton onClick={addTemplate}>Create</PrimaryButton>
                </div>
              </div>
            </Card>

            <div style={{ height: 12 }} />

            <Card>
              <h4 style={{ marginTop: 0 }}>Quick Analytics</h4>
              {/* Tiny bar chart (SVG) */}
              <div style={{ marginTop: 10 }}>
                <svg width="100%" height="80" viewBox="0 0 200 80">
                  {/* three bars */}
                  <rect x="10" y={80 - 40} width="40" height="40" rx="4" fill={THEME.primary} />
                  <rect x="70" y={80 - 25} width="40" height="25" rx="4" fill="#FFC66B" />
                  <rect x="130" y={80 - 60} width="40" height="60" rx="4" fill="#A1D7FF" />
                </svg>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  <div style={{ fontSize: 13, color: THEME.muted }}>Matched</div>
                  <div style={{ fontSize: 13, color: THEME.muted }}>Applied</div>
                  <div style={{ fontSize: 13, color: THEME.muted }}>Viewed</div>
                </div>
              </div>
            </Card>

            <div style={{ height: 12 }} />

            <Card>
              <h4 style={{ marginTop: 0 }}>Quick Actions</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button onClick={() => alert("Export CSV (simulated)")} style={{ padding: 10, borderRadius: 8 }}>Export Candidates</button>
                <button onClick={() => navigate("/analytics")} style={{ padding: 10, borderRadius: 8 }}>Full Analytics</button>
              </div>
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
}
