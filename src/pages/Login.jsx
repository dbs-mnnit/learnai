import { Link } from "react-router-dom";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Login() {
  const [loginType, setLoginType] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginType === "email") {
      console.log("Login with Email:", email);
    } else {
      console.log("Login with Phone:", "+" + phone);
    }
    console.log("Password:", password);
    // TODO: Firebase Login logic
  };

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Login to continue your AI journey.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Email / Phone Toggle */}
          <div style={styles.toggleWrapper}>
            <button
              type="button"
              onClick={() => setLoginType("email")}
              style={loginType === "email" ? styles.toggleActive : styles.toggle}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => setLoginType("phone")}
              style={loginType === "phone" ? styles.toggleActive : styles.toggle}
            >
              Phone
            </button>
          </div>

          {/* Input Fields */}
          {loginType === "email" ? (
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          ) : (
            <div style={styles.phoneWrapper}>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: '100%',
                  height: '50px',
                  paddingLeft: '58px',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                }}
                buttonStyle={{
                  backgroundColor: '#f9f9f9',
                  borderRight: '1px solid #ccc',
                  borderTopLeftRadius: '10px',
                  borderBottomLeftRadius: '10px',
                }}
                containerStyle={{
                  width: '100%',
                  marginBottom: '0px',
                }}
                dropdownStyle={{
                  maxHeight: '250px',
                  overflowY: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  fontSize: '14px',
                }}
              />
            </div>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.primaryButton}>
            Login
          </button>
        </form>

        <p style={styles.orText}>OR</p>

        {/* OAuth Section */}
        <div style={styles.oauthWrapper}>
          <button type="button" style={styles.oauthGoogle}>
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" style={styles.oauthIcon} />
            Login with Google
          </button>

          <button type="button" style={styles.oauthFacebook}>
            <img src="https://img.icons8.com/fluency/24/000000/facebook-new.png" alt="Facebook" style={styles.oauthIcon} />
            Login with Facebook
          </button>
        </div>

        <p style={styles.loginText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.loginLink}>
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}

// ✨ Premium Styles
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
  toggleWrapper: {
    display: "flex",
    marginBottom: "10px",
    gap: "10px",
  },
  toggle: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#f2f2f2",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  toggleActive: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
    transition: "all 0.3s ease",
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

export default Login;
