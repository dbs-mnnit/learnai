import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Verify() {
  const navigate = useNavigate();

  const [emailOtp, setEmailOtp] = useState(new Array(6).fill(""));
  const [phoneOtp, setPhoneOtp] = useState(new Array(6).fill(""));
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [successTimer, setSuccessTimer] = useState(5); // 5 seconds timer after success

  const emailRefs = useRef([]);
  const phoneRefs = useRef([]);

  const [emailTimer, setEmailTimer] = useState(60);
  const [phoneTimer, setPhoneTimer] = useState(60);

  const userEmail = "digvijay@example.com";
  const userPhone = "+91-9876543210";

  useEffect(() => {
    if (emailVerified && phoneVerified) {
      const interval = setInterval(() => {
        setSuccessTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [emailVerified, phoneVerified]);

  useEffect(() => {
    if (successTimer === 0 && emailVerified && phoneVerified) {
      navigate("/login");
    }
  }, [successTimer, emailVerified, phoneVerified, navigate]);

  useEffect(() => {
    let emailInterval = null;
    if (emailTimer > 0) {
      emailInterval = setInterval(() => setEmailTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(emailInterval);
  }, [emailTimer]);

  useEffect(() => {
    let phoneInterval = null;
    if (phoneTimer > 0) {
      phoneInterval = setInterval(() => setPhoneTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(phoneInterval);
  }, [phoneTimer]);

  const resendEmailOtp = () => {
    console.log("Resending Email OTP...");
    setEmailTimer(60);
    // TODO: Backend resend Email OTP
  };

  const resendPhoneOtp = () => {
    console.log("Resending Phone OTP...");
    setPhoneTimer(60);
    // TODO: Backend resend Phone OTP
  };

  const handleChange = (element, index, type) => {
    if (isNaN(element.value)) return;
    const setter = type === "email" ? setEmailOtp : setPhoneOtp;
    const otp = type === "email" ? [...emailOtp] : [...phoneOtp];
    const refs = type === "email" ? emailRefs : phoneRefs;

    otp[index] = element.value;
    setter(otp);

    if (element.value !== "" && index < 5) {
      refs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index, type) => {
    const otp = type === "email" ? emailOtp : phoneOtp;
    const refs = type === "email" ? emailRefs : phoneRefs;

    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      refs.current[index - 1].focus();
    }
  };

  const handleEmailVerify = () => {
    const emailCode = emailOtp.join("");
    console.log("Verifying Email OTP:", emailCode);
    if (emailCode.length === 6) {
      setEmailVerified(true);
    } else {
      alert("Enter complete Email OTP");
    }
  };

  const handlePhoneVerify = () => {
    const phoneCode = phoneOtp.join("");
    console.log("Verifying Phone OTP:", phoneCode);
    if (phoneCode.length === 6) {
      setPhoneVerified(true);
    } else {
      alert("Enter complete Phone OTP");
    }
  };

  const handleEdit = () => {
    navigate("/signup");
  };

  const handleManualLogin = () => {
    navigate("/login");
  };

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        {emailVerified && phoneVerified ? (
          <div style={styles.successSection}>
            <h1 style={styles.successTitle}>🎉 Verification Successful!</h1>
            <p style={styles.successSubtitle}>
              Redirecting to Login in {successTimer}s...
            </p>
            <button onClick={handleManualLogin} style={styles.primaryButton}>
              Go to Login Now
            </button>
          </div>
        ) : (
          <>
            <h1 style={styles.title}>Verify Your Account</h1>
            <p style={styles.subtitle}>Complete Email and Phone Verification</p>

            {/* Email OTP Section */}
            <div style={styles.section}>
              <div style={styles.labelRow}>
                <p style={styles.labelText}>OTP sent to {userEmail}</p>
                <button type="button" onClick={handleEdit} style={styles.editButton}>
                  Edit
                </button>
              </div>

              <div style={styles.otpContainer}>
                {emailOtp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target, index, "email")}
                    onKeyDown={(e) => handleKeyDown(e, index, "email")}
                    ref={(el) => (emailRefs.current[index] = el)}
                    style={styles.otpInput}
                    disabled={emailVerified}
                  />
                ))}
              </div>

              {emailVerified ? (
                <p style={styles.verifiedText}>✅ Email Verified</p>
              ) : (
                <>
                  {emailTimer > 0 ? (
                    <p style={styles.timerText}>Resend in {emailTimer}s</p>
                  ) : (
                    <button type="button" onClick={resendEmailOtp} style={styles.resendButton}>
                      Resend Email OTP
                    </button>
                  )}
                  <button type="button" onClick={handleEmailVerify} style={styles.verifyButton}>
                    Verify Email
                  </button>
                </>
              )}
            </div>

            {/* Phone OTP Section */}
            <div style={styles.section}>
              <div style={styles.labelRow}>
                <p style={styles.labelText}>OTP sent to {userPhone}</p>
                <button type="button" onClick={handleEdit} style={styles.editButton}>
                  Edit
                </button>
              </div>

              <div style={styles.otpContainer}>
                {phoneOtp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target, index, "phone")}
                    onKeyDown={(e) => handleKeyDown(e, index, "phone")}
                    ref={(el) => (phoneRefs.current[index] = el)}
                    style={styles.otpInput}
                    disabled={phoneVerified}
                  />
                ))}
              </div>

              {phoneVerified ? (
                <p style={styles.verifiedText}>✅ Phone Verified</p>
              ) : (
                <>
                  {phoneTimer > 0 ? (
                    <p style={styles.timerText}>Resend in {phoneTimer}s</p>
                  ) : (
                    <button type="button" onClick={resendPhoneOtp} style={styles.resendButton}>
                      Resend Phone OTP
                    </button>
                  )}
                  <button type="button" onClick={handlePhoneVerify} style={styles.verifyButton}>
                    Verify Phone
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// 🌟 Professional Premium Styles
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "460px",
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "18px",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "30px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "30px",
  },
  labelRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelText: {
    fontSize: "15px",
    color: "#555",
    fontWeight: "600",
  },
  editButton: {
    fontSize: "14px",
    color: "#007bff",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
  },
  otpContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  otpInput: {
    width: "45px",
    height: "50px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    backgroundColor: "#f9f9f9",
    outline: "none",
    transition: "all 0.3s ease",
  },
  timerText: {
    fontSize: "13px",
    color: "#999",
    marginTop: "8px",
    fontWeight: "600",
  },
  resendButton: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#007bff",
    backgroundColor: "transparent",
    border: "none",
    textDecoration: "underline",
    cursor: "pointer",
  },
  verifyButton: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontWeight: "600",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  verifiedText: {
    marginTop: "10px",
    fontSize: "15px",
    color: "green",
    fontWeight: "700",
  },
  successSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  successTitle: {
    fontSize: "26px",
    color: "#28a745",
    fontWeight: "700",
  },
  successSubtitle: {
    fontSize: "16px",
    color: "#555",
  },
  primaryButton: {
    marginTop: "10px",
    padding: "14px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Verify;
