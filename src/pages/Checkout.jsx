import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.course;

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
  });
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info:", { ...userInfo, phone: "+" + phone });
    console.log("Purchasing Course:", course);

    alert("Enrollment Successful!");
    navigate("/"); // Redirect after success
  };

  if (!course) {
    return (
      <section style={styles.empty}>
        <h2>No Course Selected</h2>
        <p>Please select a course first!</p>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Secure Your Seat</h1>
          <p style={styles.heroSubtitle}>
            Complete your checkout and start your journey with <strong>{course.title}</strong>.
          </p>
        </div>
      </section>

      {/* Main Checkout */}
      <section style={styles.mainSection}>
        <div style={styles.checkoutGrid}>

          {/* Course Summary */}
          <div style={styles.courseCard}>
            <h2 style={styles.courseTitle}>Course Summary</h2>

            <div style={styles.courseInfoRow}>
              <span style={styles.courseLabel}>📚 Course:</span>
              <span style={styles.courseValue}>{course.title}</span>
            </div>

            <div style={styles.courseInfoRow}>
              <span style={styles.courseLabel}>👨‍🏫 Mentor:</span>
              <span style={styles.courseValue}>{course.mentor}</span>
            </div>

            <div style={styles.courseInfoRow}>
              <span style={styles.courseLabel}>⏳ Duration:</span>
              <span style={styles.courseValue}>{course.duration}</span>
            </div>

            <div style={styles.courseInfoRow}>
              <span style={styles.courseLabel}>📈 Level:</span>
              <span style={styles.courseValue}>{course.level}</span>
            </div>

            <div style={styles.priceBox}>
              <span style={styles.priceLabel}>💰 Total Price</span>
              <h3 style={styles.priceValue}>${course.price}</h3>
            </div>
          </div>

          {/* User Info Form */}
          <form style={styles.card} onSubmit={handleSubmit}>
            <h2 style={styles.cardTitle}>Your Information</h2>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={userInfo.fullName}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userInfo.email}
              onChange={handleChange}
              required
              style={styles.input}
            />

            {/* Stable Phone Input */}
            <div style={styles.phoneInputContainer}>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: '100%',
                  height: '52px',
                  fontSize: '16px',
                  paddingLeft: '58px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  backgroundColor: '#fafafa',
                }}
                buttonStyle={{
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  backgroundColor: '#fafafa',
                  borderRight: '1px solid #ddd',
                  padding: '0 10px',
                }}
                containerStyle={{
                  width: '100%',
                  marginBottom: '20px',
                }}
                dropdownStyle={{
                  borderRadius: '8px',
                }}
              />
            </div>

            {/* Payment Summary */}
            <div style={styles.paymentSummary}>
              <p style={styles.totalAmount}>Total: ${course.price}</p>
              <button type="submit" style={styles.paymentButton}>
                Confirm & Pay 
              </button>
            </div>
          </form>

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
    fontSize: "46px",
    fontWeight: "800",
    marginBottom: "16px",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#cccccc",
    lineHeight: "1.6",
  },
  mainSection: {
    padding: "60px 20px",
    backgroundColor: "#f9fafb",
  },
  checkoutGrid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
    padding: "30px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
  },
  courseCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
    padding: "30px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    justifyContent: "space-between",
    border: "1px solid #eee",
  },
  cardTitle: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#0a0a23",
    marginBottom: "10px",
  },
  courseTitle: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#0a0a23",
    marginBottom: "10px",
  },
  courseInfoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "15px",
    color: "#555",
    padding: "8px 0",
    borderBottom: "1px solid #f1f1f1",
  },
  courseLabel: {
    fontWeight: "600",
    color: "#0a0a23",
  },
  courseValue: {
    fontWeight: "500",
    color: "#555",
  },
  priceBox: {
    marginTop: "20px",
    padding: "18px",
    backgroundColor: "#f0f9ff",
    borderRadius: "12px",
    textAlign: "center",
  },
  priceLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#007bff",
  },
  priceValue: {
    fontSize: "28px",
    fontWeight: "800",
    marginTop: "8px",
    color: "#0a0a23",
  },
  input: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    backgroundColor: "#fafafa",
    outline: "none",
    transition: "border 0.3s ease",
  },
  phoneInputContainer: {
    width: "100%",
  },
  paymentSummary: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalAmount: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0a0a23",
  },
  paymentButton: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s",
  },
  empty: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    padding: "20px",
  },
};

export default Checkout;
