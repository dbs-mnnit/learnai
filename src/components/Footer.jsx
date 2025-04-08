import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaYoutube, FaDiscord, FaGithub, FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Column 1 - About */}
        <div style={styles.column}>
          <h2 style={styles.logo}>LearnAI</h2>
          <p style={styles.description}>
            Empowering future innovators. Learn AI, Machine Learning, and LLMs from the best in the world.
          </p>

          {/* Social Icons */}
          <div style={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/digvijay1803/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaLinkedinIn style={{ ...styles.icon, color: '#0A66C2' }} />
            </a>
            <a href="https://x.com/Digvijay1803" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <span style={{ fontSize: '20px', fontWeight: '900', color: "black" }}>X</span>
            </a>
            <a href="https://www.instagram.com/digvijay3.0/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaInstagram style={{ ...styles.icon, color: '#E1306C' }} />
            </a>
            <a href="https://www.youtube.com/@Digvijay1803" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaYoutube style={{ ...styles.icon, color: '#FF0000' }} />
            </a>
            <a href="https://discord.gg/rww2T5Rm" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaDiscord style={{ ...styles.icon, color: '#5865F2' }} />
            </a>
            <a href="https://github.com/dbs-mnnit" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaGithub style={{ ...styles.icon, color: '#171515' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61562564360357" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaFacebookF style={{ ...styles.icon, color: '#1877F2' }} />
            </a>
          </div>
        </div>

        {/* Column 2 - Explore */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Explore</h4>
          <ul style={styles.list}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/courses" style={styles.link}>Courses</Link></li>
            <li><Link to="/free-resources" style={styles.link}>Free Resources</Link></li>
            <li><Link to="/cart" style={styles.link}>Cart</Link></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Support</h4>
          <ul style={styles.list}>
            <li><Link to="/help" style={styles.link}>Help Center</Link></li>
            <li><Link to="/terms" style={styles.link}>Terms of Service</Link></li>
            <li><Link to="/privacy" style={styles.link}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>📍 New Delhi, India</p>
          <p style={styles.text}>📧 contact@learnai.com</p>
          <p style={styles.text}>📞 +91 83407 32465</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} LearnAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// 🌟 Final Premium Styles
const styles = {
  footer: {
    backgroundColor: "#0a0a23",
    color: "#c9d1d9",
    paddingTop: "50px",
    paddingBottom: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    gap: "40px",
  },
  column: {
    flex: "1 1 250px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#58a6ff",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#8b949e",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#c9d1d9",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  link: {
    textDecoration: "none",
    color: "#8b949e",
    fontSize: "14px",
    transition: "color 0.3s",
  },
  text: {
    fontSize: "14px",
    color: "#8b949e",
  },
  socialIcons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "15px",
  },
  socialLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff", // white bg
    borderRadius: "50%",
    width: "42px",
    height: "42px",
    transition: "transform 0.3s",
  },
  icon: {
    fontSize: "22px", // Let icon use its original color now
  },
  bottomBar: {
    marginTop: "40px",
    borderTop: "1px solid #30363d",
    paddingTop: "20px",
    textAlign: "center",
  },
  bottomText: {
    fontSize: "13px",
    color: "#8b949e",
  },
};

export default Footer;
