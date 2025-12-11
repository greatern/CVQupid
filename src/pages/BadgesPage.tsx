import React from "react";
import { Container, Card, PrimaryButton } from "../components/Layout";
import { THEME } from "../theme";
import { useNavigate } from "react-router-dom";

export default function BadgesPage() {
  const nav = useNavigate();

  // Mock completed courses with badges
  const userBadges = [
    {
      id: 1,
      course: "Customer Service Fundamentals",
      badgeImage: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
      certificateText:
        "Certificate of Completion – Customer Service Fundamentals",
    },
    {
      id: 2,
      course: "Digital Literacy Essentials",
      badgeImage: "https://cdn-icons-png.flaticon.com/512/456/456212.png",
      certificateText:
        "Certificate of Completion – Digital Literacy Essentials",
    },
    {
      id: 3,
      course: "Workplace Readiness Training",
      badgeImage: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      certificateText:
        "Certificate of Completion – Workplace Readiness Training",
    },
  ];

  const downloadCertificate = (badge: { id?: number; course: any; badgeImage?: string; certificateText: any; }) => {
    const blob = new Blob([badge.certificateText], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = badge.course.replace(/\s+/g, "_") + "_certificate.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: 28 }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h1 style={{ margin: 0 }}>Badges & Certificates</h1>

          <PrimaryButton onClick={() => nav("/dashboard/candidate")}
            
            >
            Back to Dashboard
          </PrimaryButton>
        </div>

        <p style={{ color: THEME.muted, marginBottom: 20 }}>
          View and download your earned course badges and certificates.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {userBadges.map((b) => (
            <Card key={b.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 12,
                }}
              >
                <img
                  src={b.badgeImage}
                  alt="Badge"
                  style={{ width: 80, height: 80 }}
                />

                <div style={{ fontWeight: 700 }}>{b.course}</div>

                <button
                  onClick={() => downloadCertificate(b)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    background: "#81b9e4ff",
                    color: "#fff",
                    width: "100%",
                  }}
                >
                  Download Certificate
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
