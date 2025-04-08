import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const heroTexts = [
    "Shape the Future of AI.",
    "Master LLMs. Build Real Solutions.",
    "Learn AI. Build Impact."
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={styles.main}>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>{heroTexts[currentText]}</h1>
          <p style={styles.heroSubtitle}>Practical. Mentor-Guided. Future-Focused AI Education.</p>
          <div style={styles.heroButtons}>
            <Link to="/signup" style={styles.primaryButton}>Start Free</Link>
            <Link to="/courses" style={styles.secondaryButton}>Explore LearnAI</Link>
          </div>
        </div>
      </section>

      {/* Why LearnAI */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionHeading}>Built for Future AI Leaders</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>⚡ Real-World Projects</h3>
              <p style={styles.featureText}>Learn by building projects that solve actual problems, not imaginary exercises.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>🚀 LLM & GPT Training</h3>
              <p style={styles.featureText}>Master GPTs, Prompt Engineering, Retrieval-Augmented Generation (RAG) pipelines hands-on.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>🤝 Mentorship & Community</h3>
              <p style={styles.featureText}>1:1 mentorships, mastermind groups, live discussions to accelerate your AI journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={styles.finalCTA}>
        <div style={styles.container}>
          <h2 style={styles.finalCTATitle}>Your AI Journey Starts Today.</h2>
          <Link to="/signup" style={styles.finalCTAButton}>Join LearnAI 🚀</Link>
        </div>
      </section>

    </main>
  );
}

// ✨ Premium Modern Styles
const styles = {
  main: {
    fontFamily: "'Poppins', sans-serif",
    overflowX: "hidden",
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    width: "100%",
  },
  heroSection: {
    minHeight: "100vh",
    backgroundColor: "#0a0a23",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "80px 0",
  },
  heroTitle: {
    fontSize: "52px",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#ccc",
    marginBottom: "30px",
    fontWeight: "400",
  },
  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  primaryButton: {
    padding: "14px 30px",
    backgroundColor: "#007bff",
    color: "#0a0a23",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background 0.3s ease",
  },
  secondaryButton: {
    padding: "14px 30px",
    backgroundColor: "#ffffff",
    color: "#0a0a23",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background 0.3s ease",
  },
  featuresSection: {
    padding: "100px 0",
    backgroundColor: "#f9fafb",
  },
  sectionHeading: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "60px",
    color: "#0a0a23",
  },
  featuresGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
    width: "300px",
    textAlign: "center",
    transition: "transform 0.3s",
  },
  featureTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#0a0a23",
  },
  featureText: {
    fontSize: "15px",
    color: "#555",
  },
  finalCTA: {
    padding: "100px 0",
    backgroundColor: "#0a0a23",
    color: "#ffffff",
    textAlign: "center",
  },
  finalCTATitle: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  finalCTAButton: {
    marginTop: "20px",
    padding: "14px 30px",
    backgroundColor: "#00C9FF",
    color: "#0a0a23",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
};

export default Home;
