import React, { useState } from "react";
import { Container, Card, PrimaryButton } from "../../components/Layout";
import { THEME } from "../../theme";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

/**
 * Mentor Dashboard
 * - View mentees and readiness
 * - Define skill weights & modules
 * - Schedule sessions and accept requests
 * - View analytics per mentee
 */

type Mentee = {
  id: number;
  name: string;
  readiness: number;
  sessionsCompleted: number;
  skills: { name: string; level: number }[];
};

export default function MentorDashboard(): JSX.Element {
  const navigate = useNavigate();

  const [mentees, setMentees] = useState<Mentee[]>([
    { id: 401, name: "Lindiwe M", readiness: 72, sessionsCompleted: 3, skills: [{ name: "Excel", level: 60 }, { name: "SQL", level: 40 }] },
    { id: 402, name: "Neo K", readiness: 58, sessionsCompleted: 1, skills: [{ name: "Customer Service", level: 70 }] },
  ]);

  const [requests, setRequests] = useState([{ id: 11, name: "Brighton M", need: "Mock interview" }]);

  const acceptRequest = (id: number) => {
    setRequests(r => r.filter(x => x.id !== id));
    alert("Accepted request " + id);
  };

  const scheduleSession = (menteeId: number) => {
    alert("Scheduled session for mentee " + menteeId);
  };

  const setWeighting = (menteeId: number, skillName: string, weight: number) => {
    alert(`Set weight ${weight} for ${skillName} on mentee ${menteeId}`);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(180deg, ${THEME.primaryLight}, ${THEME.accentPink}10, #fff)`,
      padding: 36
    }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0 }}>Mentor Dashboard</h1>
            <div style={{ color: THEME.muted }}>Manage mentees, create modules and schedule sessions.</div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <PrimaryButton onClick={() => navigate("/candidateList")} style={{ backgroundColor: "#81b9e4ff", color: "white" }}
                  >Find Candidates</PrimaryButton>
            <PrimaryButton onClick={() => alert("Invite colleagues (simulated)")} style= {{backgroundColor: "#81b9e4ff", color : "white"}}>Invite Mentor</PrimaryButton>
          </div>
        </div>

        {/* stats */}
        <div style={{ display: "flex", gap: 14, marginTop: 16 }}>
          <Card style={{ flex: 1 }}>
            <h4 style={{ marginTop: 0 }}>Mentees</h4>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{mentees.length}</div>
          </Card>
          <Card style={{ width: 260 }}>
            <h4 style={{ marginTop: 0 }}>Upcoming Sessions</h4>
            <div style={{ fontSize: 22, fontWeight: 700 }}>2</div>
            <div style={{ color: THEME.muted }}>Next: Dec 15 • 10:00</div>
          </Card>
          <Card style={{ width: 260 }}>
            <h4 style={{ marginTop: 0 }}>Avg. Rating</h4>
            <div style={{ fontSize: 22, fontWeight: 700, color: THEME.primary }}>4.6/5</div>
          </Card>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18, marginTop: 18 }}>
          <div>
            <Card>
              <h3 style={{ marginTop: 0 }}>Mentees</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {mentees.map(m => (
                  <div key={m.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 10, borderRadius: 8, background: "rgba(255,255,255,0.6)" }}>
                    <div>
                      <div style={{ fontWeight: 800 }}>{m.name}</div>
                      <div style={{ color: THEME.muted }}>Readiness: {m.readiness}% • Sessions: {m.sessionsCompleted}</div>
                      <div style={{ color: THEME.muted, fontSize: 13 }}>Skills: {m.skills.map(s => `${s.name}(${s.level}%)`).join(", ")}</div>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => scheduleSession(m.id)} style={{ padding: "8px 10px", borderRadius: 8 }}>Schedule</button>
                      <button onClick={() => navigate("/mentor-candidateProfile")} style={{ backgroundColor:"#81b9e4ff",color:"white",padding: "8px 10px", borderRadius: 8 }}>View</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div style={{ height: 16 }} />

            <Card>
              <h3 style={{ marginTop: 0 }}>Skill Weighting & Modules</h3>
              <p style={{ color: THEME.muted }}>Assign importance to skills that matter for the role.</p>

              <div style={{ display: "grid", gap: 8 }}>
                {mentees.map(m => (
                  <div key={m.id} style={{ padding: 8, borderRadius: 8, background: THEME.accentYellow }}>
                    <div style={{ fontWeight: 700 }}>{m.name}</div>
                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                      {m.skills.map(s => (
                        <div key={s.name} style={{ padding: 8, borderRadius: 8, background: THEME.accentGreen }}>
                          <div style={{ fontWeight: 700 }}>{s.name}</div>
                          <div style={{ fontSize: 12, color: THEME.muted }}>Level: {s.level}%</div>
                          <div style={{ marginTop: 6 }}>
                            <button onClick={() => setWeighting(m.id, s.name, 50)} style={{ padding: 6, borderRadius: 6 }}>Set weight 50</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <aside>
            <Card>
              <h4 style={{ marginTop: 0 }}>Requests</h4>
              <div style={{ display: "grid", gap: 8 }}>
                {requests.map(r => (
                  <div key={r.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8, borderRadius: 8, background: "rgba(255,255,255,0.6)" }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>{r.name}</div>
                      <div style={{ color: THEME.muted }}>{r.need}</div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => acceptRequest(r.id)} style={{ padding: 8, borderRadius: 8 }}>Accept</button>
                      <button onClick={() => alert("Declined (simulated)")} style={{ padding: 8, borderRadius: 8 }}>Decline</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div style={{ height: 12 }} />

            <Card>
              <h4 style={{ marginTop: 0 }}>Session Analytics</h4>
              <div style={{ display: "grid", gap: 8 }}>
                {/* simple sparkline */}
                <svg width="100%" height="60" viewBox="0 0 200 60">
                  <polyline fill="none" stroke={THEME.primary} strokeWidth="3" points="0,40 40,30 80,20 120,25 160,18 200,10" />
                </svg>
                <div style={{ color: THEME.muted, fontSize: 13 }}>Sessions trend (last 6 weeks)</div>
              </div>
            </Card>

            <div style={{ height: 12 }} />

            <Card>
              <h4 style={{ marginTop: 0 }}>Quick Actions</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button onClick={() => navigate("/chat")} style={{backgroundColor: THEME.accentGreen, padding: 10, borderRadius: 8 }}>Open Chat</button>
                <button onClick={() => alert("Upload resources (simulated)")} style={{ backgroundColor: THEME.accentPink,color: "white", padding: 10, borderRadius: 8 }}>Upload Resources</button>
              </div>
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
}
