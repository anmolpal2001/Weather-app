import "./Footer.css";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter,FaLinkedin , FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-fo">
        Weather App &copy; 2023. All rights reserved |
        <span>    Terms of Service  </span>|<span>  Privacy Policy</span>
      </p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/anmol.pal.3958914"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="social-icon" />
        </a>
        <a
          href="https://twitter.com/AnmolPa60183901"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/mr.pal_30/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a
          href="https://github.com/anmolpal2001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/anmol-pal-357506211/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
      <p className="footer-text">Designed and developed by Anmol Pal.</p>
    </footer>
  );
};

export default Footer;
