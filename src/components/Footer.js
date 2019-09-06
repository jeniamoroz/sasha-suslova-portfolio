import React from 'react';
import Link from './Link';

/**
 * Footer component holds all static throughout the pages information to be diplayed underneath to main content.
 */
const Footer = () => (
  <footer className="container footer">
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <Link
          className="btn btn-primary"
          href="https://drive.google.com/open?id=1jyFdHJHuU9ixdVCVoHw4Ws511srAS99j"
        >
          download cv
        </Link>
      </div>
      <div className="col-md-4 offset-md-4 col-sm-6 col-sm-offset-0">
        <p>
          <a href="tel:+38 066 868 88 54">+38 066 868 88 54 </a>
          <a href="mailto:suslova.oleksandra@gmail.com">suslova.oleksandra@gmail.com</a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps/search/Kyiv"
            target="_blank"
            rel="noopener noreferrer"
          >
            KYIV, Ukraine
          </a>
        </p>
      </div>
    </div>
    <div className="row socials">
      <div className="col-12">
        <Link href="https://www.facebook.com/alexandra.suslova">
          <img className="social-img" src="/static/social_fb.svg" alt="Facebook" />
        </Link>
        <Link href="https://www.behance.net/suslovaoled2b7">
          <img className="social-img" src="/static/social_be.svg" alt="Behance" />
        </Link>
        <Link href="https://www.linkedin.com/in/oleksandra-suslova-176a1a102/">
          <img className="social-img" src="/static/social_in.svg" alt="Linkedin" />
        </Link>
        <Link href="https://dribbble.com/Suslova">
          <img className="social-img" src="/static/social_dr.png" alt="Dribble" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
