function FreeResources() {
  const resources = [
    {
      id: 1,
      title: "Python for AI Cheat Sheet",
      description: "Quickly master essential Python concepts for AI and ML projects.",
      type: "Cheat Sheet",
      link: "#"
    },
    {
      id: 2,
      title: "AI/ML Career Roadmap 2025",
      description: "Your complete guide to becoming an AI Engineer, from basics to mastery.",
      type: "Roadmap Guide",
      link: "#"
    },
    {
      id: 3,
      title: "5 AI Projects Starter Pack",
      description: "Get starter templates and ideas to kickstart your AI career practically.",
      type: "Projects Pack",
      link: "#"
    },
    {
      id: 4,
      title: "Top 50 AI Interview Questions",
      description: "Prepare for your AI/ML interviews with the most asked questions and answers.",
      type: "Interview Kit",
      link: "#"
    },
    {
      id: 5,
      title: "Prompt Engineering Mini-Course",
      description: "Master the art of prompting LLMs like ChatGPT, Claude, Gemini, and more.",
      type: "Mini Ebook",
      link: "#"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Unlock Premium Free Resources</h1>
          <p style={styles.heroSubtitle}>
            Download cheat sheets, career roadmaps, AI projects, and exclusive guides to supercharge your AI learning journey.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section style={styles.resourcesSection}>
        <div style={styles.resourcesGrid}>
          {resources.map(resource => (
            <div key={resource.id} style={styles.card}>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{resource.title}</h3>
                <p style={styles.cardType}>{resource.type}</p>
                <p style={styles.cardDescription}>{resource.description}</p>
                <a href={resource.link} style={styles.button} target="_blank" rel="noopener noreferrer">
                  Download Free
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ✨ Styles
const styles = {
  heroSection: {
    background: "linear-gradient(135deg, #0a0a23, #1e1e3f)",
    padding: "100px 20px 70px",
    textAlign: "center",
    color: "#ffffff",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#cccccc",
    lineHeight: "1.6",
  },
  resourcesSection: {
    padding: "60px 20px",
    backgroundColor: "#f9fafb",
  },
  resourcesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    padding: "30px 24px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0a0a23",
  },
  cardType: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#007bff",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  cardDescription: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
  },
  button: {
    marginTop: "10px",
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "15px",
    border: "none",
    borderRadius: "10px",
    textAlign: "center",
    textDecoration: "none",
    transition: "background 0.3s ease, transform 0.2s",
  },
};

export default FreeResources;
