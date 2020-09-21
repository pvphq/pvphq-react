import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
  </section> */}
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-up">About Us</Link>
            <Link to="/">Hall of Fame</Link>
            <Link to="/">Rules & FAQs</Link>
          </div>
          <div class="footer-link-items">
            <h2>Updates</h2>
            <Link to="/">PvP News</Link>
            <Link to="/">HQ Updates</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Partners</h2>
            <Link to="/">Communities</Link>
            <Link to="/">Discord Servers</Link>
            <Link to="/">Join Us</Link>
          </div>
          <div class="footer-link-items">
            <h2>Socials</h2>
            <a href="https://www.instagram.com/pvphq/" target="_blank"
                rel="nofollow noopener noreferrer">Instagram</a>
            <a href="https://twitter.com/pvphqindia" target="_blank"
                rel="nofollow noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          
          <small class="website-rights">©2020 by PvP HQ <br/>All Rights Reserved By Their Respective Owners.</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-discord" />
            </Link>
            <Link
              class="social-icon-link instagram"
              href="https://www.instagram.com/pvphq/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
