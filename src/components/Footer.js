import React from "react";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo" />
      <div className="link-container">
        <h3>Features</h3>
        <a href="/#">Link Shortening</a>
        <a href="/#">Branded Links</a>
        <a href="/#">Analytics</a>
      </div>
      <div className="link-container">
        <h3>Resources</h3>
        <a href="/#">Blog</a>
        <a href="/#">Developers</a>
        <a href="/#">Support</a>
      </div>

      <div className="link-container">
        <h3>Company</h3>
        <a href="/#">About</a>
        <a href="/#">Our Team</a>
        <a href="/#">Careers</a>
        <a href="/#">Contact</a>
      </div>

      <div className="social-media-container">
        <a href="/#">
          {" "}
          <img
            className="social-media-icon"
            src={facebookIcon}
            alt="facebook"
          />
        </a>
        <a href="/#">
          {" "}
          <img className="social-media-icon" src={twitterIcon} alt="twitter" />
        </a>
        <a href="/#">
          {" "}
          <img
            className="social-media-icon"
            src={pinterestIcon}
            alt="pinterest"
          />
        </a>
        <a href="/#">
          {" "}
          <img
            className="social-media-icon"
            src={instagramIcon}
            alt="instagram"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
