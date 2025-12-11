import React, { useState, useMemo } from "react";
import { Container, Card, PrimaryButton } from "../../components/Layout";
import { THEME } from "../../theme";
import { Link, useNavigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

type Course = { id: number; title: string; progress: number; img: string };
type Session = { id: number; mentor: string; datetime: string; completed: boolean; img?: string };
type Mentor = { id: number; name: string; field: string; company: string; img: string; rating: number; requiredCourses: number[] };

export default function CandidateDashboard(): JSX.Element {
  const nav = useNavigate();

  // Candidate info
  const [candidate] = useState({
    id: 101,
    name: "Alicia Phiri",
    nqfLevel: "Level 4",
    degree: "N/A",
    city: "Johannesburg",
    overallReadiness: 72,
  });

  const [skills, setSkills] = useState([
    { name: "Communication", level: 80 },
    { name: "Problem Solving", level: 65 },
    { name: "Excel", level: 50 },
    { name: "HTML/CSS", level: 40 },
    { name: "Customer Service", level: 70 },
  ] as { name: string; level: number }[]);

  const [courses, setCourses] = useState<Course[]>([
    { id: 1, title: "Professional Communication", progress: 100, img: "https://picsum.photos/seed/c1/80/80" },
    { id: 2, title: "Intro to Web Dev", progress: 100, img: "https://picsum.photos/seed/c2/80/80" },
    { id: 3, title: "Job Interview Prep", progress: 100, img: "https://picsum.photos/seed/c3/80/80" },
    { id: 4, title: "Excel Advanced", progress: 100, img: "https://picsum.photos/seed/c4/80/80" },
    { id: 5, title: "Team Collaboration Skills", progress: 100, img: "https://picsum.photos/seed/c5/80/80" },
    { id: 6, title: "Data Analytics Intro", progress: 0, img: "https://picsum.photos/seed/c6/80/80" },
  ]);

  const [sessions, setSessions] = useState<Session[]>([
    { id: 1, mentor: "Sipho M", datetime: "2025-12-15 10:00", completed: false, img: "https://picsum.photos/seed/s1/60/60" },
    { id: 2, mentor: "Thandi Q", datetime: "2025-12-21 14:00", completed: false, img: "https://picsum.photos/seed/s2/60/60" },
  ]);

  // Mock mentors and the courses they value
  const [mentors] = useState<Mentor[]>([
    { id: 1, name: "Sipho M", field: "Software Development", company: "TechCo", img: "https://picsum.photos/seed/m1/80/80", rating: 4.5, requiredCourses: [2, 3, 1] },
    { id: 2, name: "Thandi Q", field: "Data Analytics", company: "DataCorp", img: "https://picsum.photos/seed/m2/80/80", rating: 4.7, requiredCourses: [4, 6, 2] },
    { id: 3, name: "Joel K", field: "Business Strategy", company: "BizGroup", img: "https://picsum.photos/seed/m3/80/80", rating: 4.3, requiredCourses: [3, 5] },
  ]);

  const readiness = useMemo(() => {
    const skillAvg = Math.round(skills.reduce((s, x) => s + x.level, 0) / skills.length);
    return Math.round((candidate.overallReadiness + skillAvg) / 2);
  }, [skills, candidate]);

  const downloadCV = () => {
    const text = `CV of ${candidate.name}\nNQF: ${candidate.nqfLevel}\nSkills: ${skills.map((s) => s.name).join(", ")}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${candidate.name.replace(/\s+/g, "_")}_CV.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const completeCourse = (id: number) => {
    setCourses((c) => c.map((x) => (x.id === id ? { ...x, progress: 100 } : x)));
  };

  const requestMentor = (mentorName: string) => {
    alert(`Mentor request sent to ${mentorName} (simulated)`);
  };

  // Mentor eligibility logic
  const completedCourses = courses.filter((c) => c.progress === 100).map((c) => c.id);
  const eligibleMentors = mentors.filter((m) =>
    m.requiredCourses.every((rc) => completedCourses.includes(rc))
  );

  const coursesCompletedCount = completedCourses.length;
  const mentorEligible = coursesCompletedCount >= 5;

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(180deg, ${THEME.primaryLight}, ${THEME.accentBlue}20, #fff)`, padding: 36 }}>
      <Container>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 28 }}>
              Welcome back, <span style={{ color: "blue" }}>{candidate.name}</span>
            </h1>
            <div style={{ color: THEME.muted, marginTop: 6 }}>Your CVQupid dashboard — progress, mentors, and skills.</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <PrimaryButton onClick={() => nav("/explore")}
                 style={{ backgroundColor: "#81b9e4ff", color: "white" }}  
            >Explore Careers</PrimaryButton>
            <PrimaryButton onClick={downloadCV}
               style={{ backgroundColor: "#81b9e4ff", color: "white" }}
            >Download CV</PrimaryButton>
          </div>
        </div>

        {/* Top Stats & Mentor Eligibility */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20, marginTop: 24 }}>
          <Card style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>Career Readiness</h3>
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <div style={{ width: 140, height: 140 }}>
                <svg viewBox="0 0 36 36" style={{ width: 140, height: 140 }}>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="4" />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={THEME.accentBlue}
                    strokeWidth="4"
                    strokeDasharray={`${readiness} ${100 - readiness}`}
                    strokeDashoffset="25"
                    strokeLinecap="round"
                  />
                  <text x="18" y="20.5" fontSize="4" textAnchor="middle" fill={THEME.dark}>
                    {readiness}%
                  </text>
                </svg>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 18 }}>Overall readiness: {readiness}%</div>
                <div style={{ color: THEME.muted, marginTop: 8 }}>
                  Technical Skills: {Math.round(skills.reduce((s, x) => s + x.level, 0) / skills.length)}% • Soft Skills: 78% • Mentor Sessions: {sessions.length}
                </div>

                {/* Mentor Eligibility Tracker */}
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontWeight: 600 }}>Mentor Eligibility Progress</div>
                  <div style={{ height: 12, background: "#eee", borderRadius: 8, marginTop: 6 }}>
                    <div
                      style={{
                        width: `${(coursesCompletedCount / 5) * 100}%`,
                        height: "100%",
                        background: THEME.accentPink,
                        borderRadius: 8,
                        transition: "width 0.3s",
                      }}
                    />
                  </div>
                  <div style={{ fontSize: 12, color: THEME.muted, marginTop: 4 }}>
                    {coursesCompletedCount} / 5 required courses completed
                  </div>
                  {mentorEligible && <div style={{ marginTop: 6, color:"red", fontWeight: "bold"}}>You can now request a mentor!</div>}
                </div>
              </div>
            </div>
          </Card>

          <Card style={{ padding: 18 }}>
            <h4 style={{ marginTop: 0 }}>Quick Actions</h4>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <button onClick={() => nav("/candidate-profile")} style={{ padding: 10, borderRadius: 8 }}>Edit Profile</button>
              <button onClick={() => nav("/chat")} style={{ padding: 10, borderRadius: 8 }}>Open Chatbox</button>
              <button onClick={() => alert("Report an issue flow (simulated)")} style={{ padding: 10, borderRadius: 8 }}>Report a Problem</button>
            </div>
          </Card>
        </div>

        {/* Main Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, marginTop: 22 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Skills */}
            <Card>
              <h3 style={{ marginTop: 0 }}>Skills & Gap Analysis</h3>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {skills.map((s, idx) => (
                  <div key={idx}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div style={{ fontWeight: 700 }}>{s.name}</div>
                      <div style={{ color: THEME.muted }}>{s.level}%</div>
                    </div>
                    <div style={{ height: 8, background: "#eee", borderRadius: 8, marginTop: 6 }}>
                      <div style={{ width: `${s.level}%`, height: "100%", background: THEME.primary, borderRadius: 8 }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 12 }}>
                <div style={{ color: THEME.muted }}>Recommended courses to close skill gaps:</div>
                <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                  {courses.map((c) => (
                    <button key={c.id} onClick={() => completeCourse(c.id)} style={{ padding: 8, borderRadius: 8, background: THEME.accentPink }}>
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Courses */}
            <Card>
              <h3 style={{ marginTop: 0 }}>Courses</h3>
              <div style={{ display: "grid", gap: 8 }}>
                {courses.map((c) => (
                  <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <img src={c.img} alt={c.title} style={{ width: 50, height: 50, borderRadius: 6, objectFit: "cover" }} />
                      <div>
                        <div style={{ fontWeight: 700 }}>{c.title}</div>
                        <div style={{ color: THEME.muted, fontSize: 13 }}>Progress: {c.progress}%</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => completeCourse(c.id)} style={{ padding: "8px 10px", borderRadius: 8 }}>{c.progress === 100 ? "View" : "Continue"}</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recommended Mentors */}
            {mentorEligible && (
              <Card>
                <h3 style={{ marginTop: 0 }}>Recommended Mentors</h3>
                <div style={{ display: "grid", gap: 10 }}>
                  {eligibleMentors.map((m) => (
                    <div key={m.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <img src={m.img} alt={m.name} style={{ width: 50, height: 50, borderRadius: 50, objectFit: "cover" }} />
                        <div>
                          <div style={{ fontWeight: 700 }}>{m.name}</div>
                          <div style={{ fontSize: 13, color: THEME.muted }}>{m.field} - {m.company}</div>
                          <div style={{ fontSize: 12, color: THEME.muted }}>Rating: {m.rating}⭐</div>
                        </div>
                      </div>
                      <PrimaryButton onClick={() => requestMentor(m.name)}
                         style={{ backgroundColor: "#81b9e4ff", color: "white" }}
                        >Request</PrimaryButton>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Card>
              <h4 style={{ marginTop: 0 }}>Upcoming Mentor Sessions</h4>
              <div style={{ display: "grid", gap: 10 }}>
                {sessions.map((s) => (
                  <div key={s.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <img src={s.img} alt={s.mentor} style={{ width: 40, height: 40, borderRadius: 50, objectFit: "cover" }} />
                      <div>
                        <div style={{ fontWeight: 700 }}>{s.mentor}</div>
                        <div style={{ color: THEME.muted, fontSize: 12 }}>{s.datetime}</div>
                      </div>
                    </div>
                    <button onClick={() => alert("Join session (simulated)")} style={{ padding: 8, borderRadius: 8 }}>Join</button>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12 }}>
                <PrimaryButton onClick={() => alert("Request new session (simulated)")}
                       style={{ backgroundColor: "#81b9e4ff", color: "white" }}
                    >Request Session</PrimaryButton>
              </div>
            </Card>

            <Card>
              <h4 style={{ marginTop: 0 }}>Profile Actions</h4>
              <div style={{ display: "grid", gap: 8 }}>
                <button onClick={() => nav("/candidate-profile")} style={{ padding: 10, borderRadius: 8 }}>Edit Profile</button>
                <button onClick={() => nav("/analytics")} style={{ padding: 10, borderRadius: 8 }}>View Analytics</button>
                <button onClick={() => nav("/course-library")} style={{ padding: 10, borderRadius: 8 }}>Course Library</button>
              </div>
            </Card>

            <Card>
                <PrimaryButton onClick={() => nav("/badge")}
                    style={{backgroundColor:"#81b9e4ff", color: "white"}}
                    >
                    View Badges & Certificates
                </PrimaryButton>

            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
}
