import React from "react";

const HomePage = () => {
  const primaryColor = "rgb(49, 232, 198)";
  const pastelPink = "rgba(255, 192, 203, 0.3)";
  const pastelBlue = "rgba(173, 216, 230, 0.3)";
  const pastelPurple = "rgba(200, 162, 255, 0.3)";
  const pastelYellow = "rgba(255, 249, 196, 0.3)";
  const pastelGreen = "rgba(144, 238, 144, 0.3)";

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  } as React.CSSProperties;

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 40px 0 rgba(0,0,0,0.1)",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 1rem",
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661774233324-ca6b9eb0bc2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcmVlcnxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero Blobs */}
        <div style={{ position: "absolute", width: "300px", height: "300px", background: pastelPink, borderRadius: "50%", top: "-100px", left: "-150px", animation: "float 6s ease-in-out infinite alternate", zIndex: 0 }} />
        <div style={{ position: "absolute", width: "200px", height: "200px", background: pastelBlue, borderRadius: "50%", bottom: "-50px", right: "-100px", animation: "float 5s ease-in-out infinite alternate-reverse", zIndex: 0 }} />
        <div style={{ position: "absolute", width: "250px", height: "250px", background: pastelPurple, borderRadius: "50%", top: "50px", right: "-125px", animation: "float 7s ease-in-out infinite alternate", zIndex: 0 }} />

        {/* Hero Content */}
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem", position: "relative", zIndex: 1 }}>CVQupid</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
          Match made in the boardroom — connecting job-ready youth with companies & mentors.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", position: "relative", zIndex: 1 }}>
          <button style={{ backgroundColor: primaryColor, color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "10px", fontWeight: 600, cursor: "pointer", border: "none" }}>
            Explore Careers
          </button>
          <button style={{ backgroundColor: "transparent", border: `2px solid ${primaryColor}`, color: primaryColor, padding: "0.75rem 1.5rem", borderRadius: "10px", fontWeight: 600, cursor: "pointer" }}>
            Join as Mentor / Company
          </button>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: "6rem 2rem", textAlign: "center", background: pastelBlue, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "150px", height: "150px", borderRadius: "50%", background: pastelPink, top: "-50px", left: "-50px", animation: "float 8s ease-in-out infinite alternate", zIndex: 0 }} />
        <div style={{ position: "absolute", width: "200px", height: "200px", borderRadius: "50%", background: pastelGreen, bottom: "-50px", right: "-50px", animation: "float 6s ease-in-out infinite alternate-reverse", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>About CVQupid</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
            CVQupid is a South African NPO/PBO dedicated to bridging the gap between unemployed youth and companies seeking skilled talent.
            We equip students and recent graduates with technical and soft skills making them more job ready, while connecting mentors and companies to candidates for optimal career readiness.
          </p>
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9yZ2FuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&w=1470&q=80"
            alt="Youth professional training"
            style={{ width: "100%", marginTop: "2rem", borderRadius: "20px", boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
          />
        </div>
      </section>

      {/* How it Works Section */}
      <section style={{ padding: "6rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem", background: pastelPurple, position: "relative" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>How CVQupid Works</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", maxWidth: "1200px" }}>
          {[
            {
              image: "https://plus.unsplash.com/premium_photo-1661490631245-1966af6b9336?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbmRpZGF0ZXN8ZW58MHx8MHx8fDA%3D?auto=format&fit=crop&w=800&q=80",
              title: "Candidates",
              desc: "Input personal info, CV, skills, NQF levels, and career interests to become job-ready.",
            },
            {
              image: "https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpZ2l0YWwlMjBtZW50b3JzfGVufDB8fDB8fHww?auto=format&fit=crop&w=800&q=80",
              title: "Mentors",
              desc: "Create profiles, assign training modules, schedule sessions, and guide candidates.",
            },
            {
              image: "https://plus.unsplash.com/premium_photo-1679279545121-5aab0a12d745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFuaWVzfGVufDB8fDB8fHww?auto=format&fit=crop&w=800&q=80",
              title: "Companies",
              desc: "Set CV templates, define required skills, and view candidate analytics for hiring decisions.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                ...cardStyle,
                width: "300px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onMouseEnter={(e: any) => Object.assign(e.currentTarget.style, cardHoverStyle)}
              onMouseLeave={(e: any) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", borderRadius: "15px", marginBottom: "1rem" }}
              />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features / Benefits Section */}
<section style={{ padding: "6rem 2rem", background: pastelGreen, textAlign: "center", position: "relative" }}>
  <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem" }}>Why Join CVQupid?</h2>
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
    {[
      { title: "Skill Development", desc: "Gain technical and soft skills required by top companies.", color: "rgba(49, 232, 198, 0.4)" },
      { title: "Mentor Guidance", desc: "Get one-on-one guidance from industry mentors.", color: "rgba(255, 192, 203, 0.4)" },
      { title: "Job Matching", desc: "Our AI-assisted platform matches you to suitable companies.", color: "rgba(173, 216, 230, 0.4)" },
      { title: "Analytics Dashboard", desc: "Track your progress, skills acquired, and readiness score.", color: "rgba(200, 162, 255, 0.4)" },
    ].map((f, idx) => (
      <div
        key={idx}
        style={{ 
          ...cardStyle, 
          width: "250px", 
          textAlign: "center", 
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem"
        }}
        onMouseEnter={(e: any) => Object.assign(e.currentTarget.style, cardHoverStyle)}
        onMouseLeave={(e: any) => Object.assign(e.currentTarget.style, cardStyle)}
      >
        {/* Circle/Shape as Icon */}
        <div style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: f.color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "700",
          fontSize: "1.5rem",
          color: "#fff"
        }}>
          {f.title.charAt(0)}
        </div>

        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>{f.title}</h3>
        <p style={{ fontSize: "1rem", lineHeight: 1.4 }}>{f.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Statistics / Impact Section */}
      <section style={{ padding: "6rem 2rem", background: pastelYellow, textAlign: "center", position: "relative" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem" }}>Our Impact</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
          {[
            { number: "500+", label: "Youth Trained" },
            { number: "120", label: "Mentors Onboarded" },
            { number: "80%", label: "Placement Rate" },
            { number: "50+", label: "Partner Companies" },
          ].map((s, idx) => (
            <div key={idx} style={{ ...cardStyle, width: "200px", textAlign: "center" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", color: primaryColor }}>{s.number}</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: "6rem 2rem", background: pastelPink, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem", position: "relative", zIndex: 1 }}>What People Say</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", position: "relative", zIndex: 1 }}>
          {[
            { name: "Carle M.", text: "CVQupid helped me land my dream job.", img: "https://randomuser.me/api/portraits/women/20.jpg" },
            { name: "Thabo S.", text: "As a mentor, I can guide candidates effectively.", img: "https://randomuser.me/api/portraits/men/30.jpg" },
            { name: "Neo K.", text: "The platform really helped me stand a better chance with companies.", img: "https://randomuser.me/api/portraits/men/23.jpg" },
          ].map((t, idx) => (
            <div key={idx} style={{ ...cardStyle, width: "250px", textAlign: "center" }}>
              <img src={t.img} alt={t.name} style={{ width: "60px", borderRadius: "50%", marginBottom: "1rem" }} />
              <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>"{t.text}"</p>
              <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;

