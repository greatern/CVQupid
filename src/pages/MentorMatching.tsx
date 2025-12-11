import React, { useState, useMemo } from "react";
import { Container, Card, PrimaryButton } from "../components/Layout";
import { THEME } from "../theme";

/**
 * MentorMatching - visualize mentor matching workflow.
 * Candidate sees which mentors they can request after completing required courses.
 */

type Mentor = { id: number; name: string; field: string; requiredCourses: number[]; available: boolean };

const MOCK_MENTORS: Mentor[] = [
  { id: 1, name: "Sipho Dlamini", field: "Software Development", requiredCourses: [1,2,3,6,7], available: true },
  { id: 2, name: "Nomsa Khumalo", field: "Data Analysis", requiredCourses: [2,3,6,7,5], available: true },
  { id: 3, name: "Thabo Mokoena", field: "Customer Service", requiredCourses: [3,4,7,5,6], available: false },
];

export default function MentorMatching() {
  const [completedCourses, setCompletedCourses] = useState<number[]>([1,2,3,6,7]); // Simulate completed
  const [requests, setRequests] = useState<number[]>([]);

  const eligibleMentors = useMemo(() => MOCK_MENTORS.filter(m => m.requiredCourses.every(rc => completedCourses.includes(rc)) && m.available), [completedCourses]);

  const requestMentor = (id: number) => {
    if (!requests.includes(id)) setRequests(prev => [...prev, id]);
    // Simulate mentor acceptance after 1s
    setTimeout(() => alert(`Mentor ${MOCK_MENTORS.find(m=>m.id===id)?.name} accepted your request! Chat is now open.`), 1000);
  };

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(180deg, ${THEME.accentYellow}10, #fff)`, padding: 28 }}>
      <Container>
        <h1>Mentor Matching</h1>
        <p style={{ color: THEME.muted }}>Complete courses and request a mentor in your field.</p>

        <h3>Completed Courses</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {completedCourses.map(c => <Card key={c} style={{ padding: "6px 10px", fontSize: 12, background: THEME.primaryLight }}>Course #{c}</Card>)}
        </div>

        <h3>Eligible Mentors</h3>
        {eligibleMentors.length > 0 ? (
          <div style={{ display: "grid", gap: 12 }}>
            {eligibleMentors.map(m => (
              <Card key={m.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{m.name}</div>
                  <div style={{ fontSize: 12, color: THEME.muted }}>Field: {m.field}</div>
                </div>
                <PrimaryButton onClick={() => requestMentor(m.id)}>
                  {requests.includes(m.id) ? "Requested" : "Request Mentor"}
                </PrimaryButton>
              </Card>
            ))}
          </div>
        ) : (
          <Card>No eligible mentors yet. Complete more courses.</Card>
        )}
      </Container>
    </div>
  );
}
