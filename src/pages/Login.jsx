import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Login() {
  const [loginType, setLoginType] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Correct API setup
  const API_BASE_URL = import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api/v1/auth`
    : null;
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || null;

  const handleCredentialResponse = async (response) => {
    if (!API_BASE_URL) {
      setError("API configuration is missing.");
      return;
    }

    const idToken = response.credential;
    if (!idToken) {
      setError("Google Sign-In failed to get credentials.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ googleToken: idToken }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        navigate("/", { state: { email: data.user?.email || "" } });
      } else {
        setError(data.message || "Google Sign-In failed");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error during Google Sign-In. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!API_BASE_URL) {
      setError("API configuration is missing.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginType === "email" ? email : null,
          phoneNumber: loginType === "phone" ? phone.slice(-10) : null,
          phoneCountryCode: loginType === "phone" ? `+${phone.slice(0, phone.length - 10)}` : null,
          password,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        navigate("/", { state: { email: data.user?.email || "" } });
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) {
      console.warn("Google Client ID missing.");
      setError("Google Sign-In is not configured.");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      try {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
          auto_select: false,
          ux_mode: "popup",
          context: "signin",
        });

        const googleButtonContainer = document.getElementById("google-signin-button");
        if (googleButtonContainer) {
          window.google.accounts.id.renderButton(googleButtonContainer, {
            theme: "outline",
            size: "large",
            text: "signin_with",
            shape: "rectangular",
            width: 300,
          });
          console.log("Google Sign-In button rendered successfully.");
        } else {
          console.error("Google Sign-In button container not found.");
          setError("Failed to render Google Sign-In button.");
        }
      } catch (err) {
        console.error("Google init error:", err);
        setError("Failed to initialize Google Sign-In.");
      }
    };

    script.onerror = () => {
      console.error("Google script failed to load.");
      setError("Failed to load Google Sign-In script.");
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [GOOGLE_CLIENT_ID]);

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Login to continue your AI journey.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
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

          <button type="submit" style={styles.primaryButton} disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p style={styles.orText}>OR</p>

        <div style={styles.oauthWrapper}>
          <div id="google-signin-button" style={{ display: "flex", justifyContent: "center" }}></div>
        </div>

        {error && (
          <p style={{ ...styles.subtitle, color: "red", margin: "10px 0" }}>
            {error}
          </p>
        )}

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