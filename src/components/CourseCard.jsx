import { useNavigate } from 'react-router-dom';

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleEnrollClick = (e) => {
    e.stopPropagation(); // Prevent Card click if any
    navigate("/checkout", { state: { course } });
  };

  const handleCardClick = () => {
    navigate(`/course/${course.id}`, { state: { course } });
  };

  return (
    <div style={styles.card} onClick={handleCardClick}>
      <div style={styles.topBar}></div>

      <div style={styles.content}>
        {/* Title and Mentor */}
        <div>
          <h3 style={styles.title}>{course.title}</h3>
          <p style={styles.mentor}>👨‍🏫 {course.mentor}</p>
        </div>

        {/* Meta Info */}
        <div style={styles.metaInfo}>
          <span style={styles.meta}>⏳ {course.duration}</span>
          <span style={styles.meta}>📈 {course.level}</span>
          <span style={styles.meta}>⭐ {course.rating}</span>
        </div>

        {/* Short Description */}
        <p style={styles.description}>
          {course.description.length > 80
            ? course.description.substring(0, 80) + "..."
            : course.description}
        </p>

        {/* Price and Enroll Now Button */}
        <div style={styles.priceButtonRow}>
          <span style={styles.price}>${course.price}</span>
          <button style={styles.button} onClick={handleEnrollClick}>
            Enroll Now 
          </button>
        </div>

      </div>
    </div>
  );
}

// Styles
const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    minHeight: "400px",
    textAlign: "left",
  },
  topBar: {
    height: "6px",
    width: "100%",
    background: "linear-gradient(90deg, #007bff 0%, #007bff 100%)",
  },
  content: {
    padding: "24px 20px",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0a0a23",
    marginBottom: "6px",
  },
  mentor: {
    fontSize: "13px",
    fontStyle: "italic",
    color: "#888",
    marginBottom: "12px",
  },
  metaInfo: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    fontSize: "13px",
    color: "#777",
    marginBottom: "15px",
  },
  meta: {
    backgroundColor: "#f1f5f9",
    padding: "4px 10px",
    borderRadius: "8px",
  },
  description: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  priceButtonRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },
  price: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#007bff",
  },
  button: {
    padding: "10px 18px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "700",
    fontSize: "15px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s",
  },
};

export default CourseCard;

