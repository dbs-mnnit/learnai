import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setMenuOpen(false); // close mobile menu if desktop
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>LearnAI</Link>
      </div>

      {isMobile && (
        <div style={styles.hamburger} onClick={toggleMenu}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      )}

      {(isMobile && menuOpen) || !isMobile ? (
        <ul style={isMobile ? styles.linksMobile : styles.links}>
          <li><Link to="/" style={isActive("/") ? styles.activeLink : styles.link}>Home</Link></li>
          <li><Link to="/courses" style={isActive("/courses") ? styles.activeLink : styles.link}>Courses</Link></li>
          <li><Link to="/free-resources" style={isActive("/free-resources") ? styles.activeLink : styles.link}>Free Resources</Link></li>
          <li><Link to="/login" style={isActive("/login") ? styles.activeLoginButton : styles.loginButton}>Login</Link></li>
        </ul>
      ) : null}
    </nav>
  );
}

const styles = {
  navbar: {
    position: "sticky",
    top: "0",
    zIndex: "100",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "15px 40px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#007bff",
  },
  logoLink: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "28px",
    fontWeight: "bold",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "5px",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#333",
    borderRadius: "2px",
  },
  links: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    alignItems: "center",
    margin: "0",
    padding: "0",
  },
  linksMobile: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "70px",
    left: "0",
    right: "0",
    backgroundColor: "#fff",
    padding: "20px 0",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    listStyle: "none",
    gap: "20px",
    alignItems: "center",
    margin: "0",
  },
  link: {
    textDecoration: "none",
    color: "#555",
    fontSize: "16px",
    fontWeight: "600",
    transition: "color 0.3s",
  },
  activeLink: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "16px",
    fontWeight: "700",
    borderBottom: "2px solid #007bff",
    paddingBottom: "4px",
    transition: "all 0.3s",
  },
  loginButton: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background 0.3s, transform 0.2s",
  },
  activeLoginButton: {
    padding: "8px 16px",
    backgroundColor: "#0056b3",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "700",
    transition: "background 0.3s, transform 0.2s",
  },
};

export default Navbar;
