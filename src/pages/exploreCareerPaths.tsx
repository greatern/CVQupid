import React, { useState } from "react";

interface Career {
  id: number;
  title: string;
  industry: string;
  description: string;
  companies: string[];
  color: string;
}

const careersData: Career[] = [
  { id: 1, title: "Software Developer", industry: "Technology", description: "Build applications and software solutions for businesses.", companies: ["TechCorp", "CodeHub", "Innovatech"], color: "rgba(49, 232, 198, 0.3)" },
  { id: 2, title: "Marketing Specialist", industry: "Marketing", description: "Create marketing campaigns and grow brand awareness.", companies: ["MarketWise", "BrandBuilders", "AdPro"], color: "rgba(255, 192, 203, 0.3)" },
  { id: 3, title: "Data Analyst", industry: "Analytics", description: "Analyze data and provide actionable business insights.", companies: ["DataMine", "Insightify", "StatWorks"], color: "rgba(173, 216, 230, 0.3)" },
  { id: 4, title: "HR Manager", industry: "Human Resources", description: "Manage recruitment, training, and employee engagement.", companies: ["PeopleFirst", "TalentFlow", "HR Solutions"], color: "rgba(200, 162, 255, 0.3)" },
  { id: 5, title: "Graphic Designer", industry: "Design", description: "Create visual designs for digital and print media.", companies: ["DesignStudio", "CreativeLab", "PixelPerfect"], color: "rgba(255, 249, 196, 0.3)" },
  { id: 6, title: "Business Analyst", industry: "Business", description: "Analyze business processes and provide improvement solutions.", companies: ["BizConsult", "OptiSolutions", "StratExperts"], color: "rgba(144, 238, 144, 0.3)" },
  { id: 7, title: "UX/UI Designer", industry: "Design", description: "Design user-friendly interfaces and experiences.", companies: ["UXLab", "FlowDesigns", "PixelPerfect"], color: "rgba(255, 182, 193, 0.3)" },
  { id: 8, title: "Content Writer", industry: "Marketing", description: "Create compelling content for digital platforms.", companies: ["WordSmiths", "ContentFlow", "MarketWise"], color: "rgba(173, 216, 230, 0.3)" },
  { id: 9, title: "Cybersecurity Analyst", industry: "Technology", description: "Protect company data and networks from cyber threats.", companies: ["SecureNet", "CyberSafe", "TechCorp"], color: "rgba(49, 232, 198, 0.3)" },
  { id: 10, title: "Sales Executive", industry: "Business", description: "Drive sales and maintain client relationships.", companies: ["BizConsult", "StratExperts", "MarketWise"], color: "rgba(255, 249, 196, 0.3)" },
  { id: 11, title: "Project Manager", industry: "Business", description: "Plan and oversee projects to successful completion.", companies: ["OptiSolutions", "StratExperts", "BizConsult"], color: "rgba(200, 162, 255, 0.3)" },
  { id: 12, title: "Social Media Manager", industry: "Marketing", description: "Manage social media accounts and campaigns.", companies: ["BrandBuilders", "AdPro", "MarketWise"], color: "rgba(255, 192, 203, 0.3)" },
];

const ExplorePage = () => {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const industries = ["All", ...new Set(careersData.map((c) => c.industry))];

  const filteredCareers = careersData.filter(
    (c) =>
      (filter === "All" || c.industry === filter) &&
      c.title.toLowerCase().includes(search.toLowerCase())
  );

  const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    flex: "0 0 280px",
  };

  const cardHoverStyle: React.CSSProperties = {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 40px 0 rgba(0,0,0,0.1)",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", padding: "2rem", background: "#fdfdfd" }}>
      {/* Filter Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, textAlign: "center", marginBottom: "1rem" }}>
          Explore Careers
        </h1>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
          {industries.map((ind, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(ind)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                border: "none",
                background: filter === ind ? "rgb(49, 232, 198)" : "rgba(200,200,200,0.2)",
                color: filter === ind ? "#fff" : "#333",
                cursor: "pointer",
                fontWeight: 600,
                transition: "0.3s",
              }}
            >
              {ind}
            </button>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="Search careers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "250px",
              marginTop: "1rem",
            }}
          />
        </div>
      </section>

      {/* Careers Grid */}
      <section
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          gap: "1.5rem",
          paddingBottom: "2rem",
        }}
      >
        {filteredCareers.map((career) => (
          <div
            key={career.id}
            style={cardStyle}
            onMouseEnter={(e: any) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={(e: any) => Object.assign(e.currentTarget.style, cardStyle)}
            onClick={() => setSelectedCareer(career)}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: career.color,
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              {career.title.charAt(0)}
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem", textAlign: "center" }}>
              {career.title}
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.4, textAlign: "center" }}>{career.description}</p>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedCareer && (
        <div
          onClick={() => setSelectedCareer(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(255,255,255,0.95)",
              padding: "2rem",
              borderRadius: "20px",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>{selectedCareer.title} Companies</h2>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
              {selectedCareer.companies.map((c, idx) => (
                <li key={idx} style={{ marginBottom: "0.5rem" }}>
                  {c}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedCareer(null)}
              style={{
                backgroundColor: "rgb(49, 232, 198)",
                color: "#fff",
                padding: "0.75rem 2rem",
                borderRadius: "12px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;

