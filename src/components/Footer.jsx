import React from 'react';
import PageLinks from '../links/PageLinks';
import SocialLinks from '../links/SocialLinks';

function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; braqUni your #1 retailer | supplier | manufacturer
        fabric wear.
        <span id="date">{new Date().getFullYear}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
