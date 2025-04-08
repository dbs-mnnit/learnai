import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userPhone = "+" + phone;
    console.log({ ...formData, phone: userPhone });
    navigate("/verify");
  };

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Join LearnAI</h1>
        <p style={styles.subtitle}>Learn AI the right way.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <div style={styles.phoneWrapper}>
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={styles.phoneInput}
              buttonStyle={styles.phoneButton}
              containerStyle={styles.phoneContainer}
              dropdownStyle={styles.dropdown}
            />
          </div>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.primaryButton}>
            Create Account
          </button>
        </form>

        <p style={styles.orText}>OR</p>

        <div style={styles.oauthWrapper}>
          <button type="button" style={styles.oauthGoogle}>
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" style={styles.oauthIcon} />
            Sign up with Google
          </button>

          <button type="button" style={styles.oauthFacebook}>
            <img src="https://img.icons8.com/fluency/24/000000/facebook-new.png" alt="Facebook" style={styles.oauthIcon} />
            Sign up with Facebook
          </button>
        </div>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginLink}>
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}

// ✨ Magic Level Styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0a0a23, #1e1e3f)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "18px",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    animation: "fadeInSlide 0.6s ease forwards",
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
    outline: "none",
    transition: "all 0.3s ease",
  },
  phoneWrapper: {
    width: "100%",
  },
  phoneContainer: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  },
  phoneInput: {
    width: "100%",
    height: "50px",
    paddingLeft: "48px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    fontSize: "16px",
  },
  phoneButton: {
    backgroundColor: "#f9f9f9",
    borderRight: "1px solid #ccc",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  dropdown: {
    borderRadius: "10px",
  },
  primaryButton: {
    marginTop: "10px",
    padding: "14px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "600",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 0.2s ease, background 0.3s ease",
  },
  orText: {
    margin: "20px 0",
    fontSize: "14px",
    color: "#aaa",
    fontWeight: "600",
  },
  oauthWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  oauthGoogle: {
    padding: "12px",
    backgroundColor: "#fff",
    color: "#555",
    fontWeight: "600",
    fontSize: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  oauthFacebook: {
    padding: "12px",
    backgroundColor: "#4267B2",
    color: "#fff",
    fontWeight: "600",
    fontSize: "15px",
    border: "none",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  oauthIcon: {
    width: "22px",
    height: "22px",
  },
  loginText: {
    marginTop: "25px",
    fontSize: "14px",
    color: "#555",
  },
  loginLink: {
    color: "#007bff",
    fontWeight: "600",
    textDecoration: "underline",
  },
};

export default Signup;
