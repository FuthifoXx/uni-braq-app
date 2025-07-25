import React from 'react';
import logo from '/braqUni.png';
import PageLinks from '../links/PageLinks';
import SocialLinks from '../links/SocialLinks';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo-container">
            <img
              src={logo}
              className="nav-logo"
              alt="braqUni"
              style={{ width: '100px' }}
            />
          </div>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
