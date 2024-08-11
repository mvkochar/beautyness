import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="d-f jc-sb align-center">
          <div><img src="/images/footer-logo.svg" alt="footer-logo" /></div>
          <div className="footer-social d-f">
            <div><img src="/images/footer-social1.png" alt="footer-social1" /></div>
            <div><img src="/images/footer-social2.png" alt="footer-social2" /></div>
            <div><img src="/images/footer-social3.png" alt="footer-social3" /></div>
            <div><img src="/images/footer-social4.png" alt="footer-social4" /></div>
          </div>
        </div>
        <div className="footer-bar d-f">
          <div>
            <div className="footer-bar-title">Explore</div>
            <ul className="footer-bar-list">
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Appointments</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-bar-title">Utility Pages</div>
            <ul className="footer-bar-list">
              <li><a href="">Start here</a></li>
              <li><a href="">Style gude</a></li>
              <li><a href="">404 not found</a></li>
              <li><a href="">Password protected</a></li>
              <li><a href="">Licenses</a></li>
              <li><a href="">Changelog</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-bar-title">Keep in Touch</div>
            <div className="footer-contact d-f">
              <div className="footer-contact-bl d-f">
                <div className="contact-bl-title">Address:</div>
                <div className="contact-bl-desc">24A Kingston St, Los Vegas NC 28202, USA.</div>
              </div>
              <div className="footer-contact-bl d-f">
                <div className="contact-bl-title">Mail :</div>
                <div className="contact-bl-desc">support@doctors.com</div>
              </div>
              <div className="footer-contact-bl d-f">
                <div className="contact-bl-title">Phone :</div>
                <div className="contact-bl-desc">(+22) 123 - 4567 - 900</div>
              </div>
            </div>
          </div>
          <div>
            <div className="footer-bar-title">Working Hours</div>
            <ul className='footer-bar-list'>
              <li>Mon to Fri: 7am - 6pm</li>
              <li>Sat: 9am - 7pm</li>
              <li>Sun: 9am - 6pm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">&copy; <span>Copyright 2021. </span>Drafted by Victor Themes.</div>
    </footer>
  )
}

export default Footer