import { useLocation, useNavigate } from "react-router-dom";

function CourseDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {};

  const handleEnrollClick = () => {
    navigate("/checkout", { state: { course } });
  };
  

  if (!course) {
    return (
      <section style={styles.errorSection}>
        <h1>Course Not Found</h1>
        <button onClick={() => navigate("/courses")} style={styles.backButton}>
          Back to Courses
        </button>
      </section>
    );
  }

  return (
    <main style={styles.main}>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <h1 style={styles.title}>{course.title}</h1>
        <p style={styles.shortDesc}>{course.description}</p>

        <div style={styles.metaInfo}>
          <span>👨‍🏫 {course.mentor}</span>
          <span>📚 {course.level}</span>
          <span>⏳ {course.duration}</span>
          <span>🗣️ {course.language}</span>
          <span>⭐ {course.rating} / 5</span>
        </div>

        <div style={styles.priceBox}>
          <h2 style={styles.price}>${course.price}</h2>
          <button style={styles.enrollButton} onClick={handleEnrollClick}>
            Enroll Now 
          </button>

        </div>
      </section>

      {/* What You'll Learn */}
      <section style={styles.learnSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionHeading}>Skills You Will Master</h2>
          <div style={styles.skillsGrid}>
            {course.skills.map((skill, index) => (
              <div key={index} style={styles.skillCard}>
                ✅ {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section style={styles.curriculumSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionHeading}>Curriculum Journey</h2>
          <div style={styles.timeline}>
            {course.curriculum.map((topic, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineContent}>
                  📚 {topic}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Course */}
      <section style={styles.aboutSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionHeading}>About This Course</h2>
          <p style={styles.aboutText}>
            {course.detailedDescription}
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section style={styles.prerequisiteSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionHeading}>Before You Start</h2>
          <div style={styles.prerequisitesBox}>
            ✅ {course.prerequisites}
          </div>
        </div>
      </section>

    </main>
  );
}

// ✨ PREMIUM MODERN STYLES
const styles = {
  main: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#ffffff",
    overflowX: "hidden",
  },
  heroSection: {
    position: "relative",
    padding: "100px 20px 60px",
    background: "linear-gradient(135deg, #0a0a23, #1e1e3f)",
    color: "#ffffff",
    textAlign: "center",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "radial-gradient(circle at 30% 50%, rgba(0, 201, 255, 0.2), transparent 40%)",
    zIndex: "0",
  },
  title: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "12px",
    position: "relative",
    zIndex: "1",
  },
  shortDesc: {
    fontSize: "18px",
    color: "#cccccc",
    marginBottom: "30px",
    position: "relative",
    zIndex: "1",
  },
  metaInfo: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    fontSize: "14px",
    marginBottom: "25px",
    color: "#bbbbbb",
    position: "relative",
    zIndex: "1",
  },
  priceBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    position: "relative",
    zIndex: "1",
  },
  price: {
    fontSize: "34px",
    fontWeight: "700",
    color: "#00C9FF",
  },
  enrollButton: {
    padding: "14px 30px",
    backgroundColor: "#00C9FF",
    color: "#0a0a23",
    border: "none",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s",
    ":hover": {
      backgroundColor: "#00B2E3", // Slight darken on hover
      transform: "scale(1.03)",
    }
  },

  learnSection: {
    padding: "80px 20px",
    backgroundColor: "#f9fafb",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionHeading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#0a0a23",
    textAlign: "center",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  skillCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "14px",
    fontSize: "16px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
    transition: "transform 0.3s ease",
  },
  curriculumSection: {
    padding: "80px 20px",
    backgroundColor: "#ffffff",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginTop: "30px",
    borderLeft: "2px solid #00C9FF",
    paddingLeft: "30px",
  },
  timelineItem: {
    position: "relative",
    fontSize: "16px",
    color: "#555",
  },
  timelineDot: {
    width: "12px",
    height: "12px",
    backgroundColor: "#00C9FF",
    borderRadius: "50%",
    position: "absolute",
    left: "-7px",
    top: "5px",
  },
  timelineContent: {
    paddingLeft: "10px",
  },
  aboutSection: {
    padding: "80px 20px",
    backgroundColor: "#f9fafb",
  },
  aboutText: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.7",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  prerequisiteSection: {
    padding: "80px 20px",
    backgroundColor: "#ffffff",
  },
  prerequisitesBox: {
    backgroundColor: "#e0f7fa",
    padding: "20px",
    borderRadius: "12px",
    fontSize: "16px",
    color: "#0a0a23",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  errorSection: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    textAlign: "center",
  },
  backButton: {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#00C9FF",
    color: "#0a0a23",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default CourseDetails;
