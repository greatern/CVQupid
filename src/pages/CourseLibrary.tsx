import React, { useState } from "react";
import { Container, Card } from "../components/Layout";
import { THEME } from "../theme";

type Course = {
  id: number;
  title: string;
  description: string;
  category: "Technical" | "Soft Skills" | "Professional";
  image: string;
  status: "completed" | "in-progress" | "recommended" | "available";
  progress: number; // 0 - 100
};

const MOCK_COURSES: Course[] = [
  { id: 1, title: "HTML & CSS Basics", description: "Learn the fundamentals of web design.", category: "Technical", status: "completed", image: "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D", progress: 100 },
  { id: 2, title: "JavaScript Fundamentals", description: "Master the basics of JS.", category: "Technical", status: "completed", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D", progress: 100 },
  { id: 3, title: "React for Beginners", description: "Learn React from scratch.", category: "Technical", status: "in-progress", image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D", progress: 40 },
  { id: 4, title: "Communication Skills", description: "Improve your soft skills.", category: "Soft Skills", status: "in-progress", image: "https://plus.unsplash.com/premium_photo-1661771564227-1d8484e32c8f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D", progress: 60 },
  { id: 5, title: "Time Management", description: "Organize your tasks effectively.", category: "Soft Skills", status: "in-progress", image: "https://plus.unsplash.com/premium_photo-1683887033225-16cca6e4c4e8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D", progress: 20 },
  { id: 6, title: "Excel Basics", description: "Data organization and formulas.", category: "Technical", status: "recommended", image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D", progress: 0 },
  { id: 7, title: "Industry Ethics", description: "Learn professional ethics in the workplace.", category: "Professional", status: "available", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D", progress: 0 },
  { id: 8, title: "Leadership Skills", description: "Guide teams effectively.", category: "Soft Skills", status: "recommended", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D", progress: 0 },
  { id: 9, title: "Python Basics", description: "Learn Python programming.", category: "Technical", status: "available", image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D", progress: 0 },
  { id: 10, title: "Problem Solving", description: "Develop logical thinking skills.", category: "Professional", status: "available", image: "https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D", progress: 0 },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState<"completed" | "in-progress" | "recommended" | "available">("completed");

  const coursesByStatus = (status: string) => MOCK_COURSES.filter(c => c.status === status);

  const renderCourseCard = (course: Course) => {
    let statusColor = THEME.muted;
    if (course.status === "completed") statusColor = THEME.primary;
    if (course.status === "in-progress") statusColor = THEME.accentYellow;
    if (course.status === "recommended") statusColor = THEME.accentGreen;
    if (course.status === "available") statusColor = THEME.accentBlue;

    return (
      <Card key={course.id} style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: 250 }}>
        <div style={{ height: 100, background: `url(${course.image}) center/cover no-repeat` }} />
        <div style={{ padding: 10, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{course.title}</div>
            <div style={{ fontSize: 12, color: THEME.muted, marginTop: 2 }}>{course.description}</div>
          </div>
          <div>
            <div style={{ height: 8, borderRadius: 4, background: "#eee", marginTop: 6 }}>
              <div style={{
                width: `${course.progress}%`,
                height: "100%",
                background: statusColor,
                borderRadius: 4,
                transition: "width 0.3s"
              }} />
            </div>
            <span style={{ fontSize: 10, color: statusColor, fontWeight: 600, marginTop: 4, display: "inline-block" }}>
              {course.status.replace("-", " ")}
            </span>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc", padding: 28 }}>
      <Container>
        <h1>Course Library</h1>
        <p style={{ color: THEME.muted }}>View and track your technical and soft skills development.</p>

        {/* Tabs */}
        <div style={{ marginTop: 16, marginBottom: 16, display: "flex", gap: 12 }}>
          {(["completed", "in-progress", "recommended", "available"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: activeTab === tab ? `2px solid ${THEME.primary}` : "1px solid #ccc",
                background: activeTab === tab ? THEME.primaryLight : "#fff",
                cursor: "pointer",
                fontWeight: 600,
                textTransform: "capitalize",
                fontSize: 13
              }}
            >
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12,
        }}>
          {coursesByStatus(activeTab).map(renderCourseCard)}
        </div>
      </Container>
    </div>
  );
}
