import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles/Footer.module.scss";

const Footer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      setIsAtBottom(isBottom);
    };

    if (!isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  if (isHomePage || !isAtBottom) return null; // Don't show on home page or unless at the bottom

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2025 YourCompany. All Rights Reserved.</p>
        <div className={styles.socialLinks}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
