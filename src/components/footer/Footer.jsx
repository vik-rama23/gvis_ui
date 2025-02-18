import React from "react";
import "./footer.css";
import facebookIcon from "../../assest/images/facebook.png";
import instagramIcon from "../../assest/images/instagram.png";
import youtubeIcon from "../../assest/images/youtube.png";
import twitterIcon from "../../assest/images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section contact-info-footer">
          <h3>CONTACT US</h3>
          <p><strong>GVIS, Malinagar</strong></p>
          <p>Village + Post: Malinagar District: Samastipur, Pusa, Malinagar, Samastipur, Bihar 848125</p>
          <p><strong>Telephone:</strong>+91-9931877440</p>
          <p><strong>Email:</strong>help.gvischool@gmail.com</p>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={twitterIcon} alt="Twitter" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>QUICK LINKS</h3>
          <a href="#">Achievements</a>
          <a href="#">Alumni</a>
          <a href="#">Assignments</a>
          <a href="#">Photo Gallery</a>
          <a href="#">Social Awareness</a>
          <a href="#">Vacancy</a>
        </div>

        {/* Location Map */}
        <div className="footer-section location">
          <h3>LOCATION MAP</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.8604707170466!2d85.67062941842724!3d25.998419263662836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eda1ed6fe34d39%3A0xb017b2668962e3d8!2sGreen%20Valley%20International%20School!5e0!3m2!1sen!2sin!4v1739898059168!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="copyright">
        Copywrite 2025 Green Valley International School Malinagar Pusa. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
