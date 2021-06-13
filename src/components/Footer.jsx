import React from "react";
import "./FooterStyles.css";
import Container from "react-bootstrap/Container";
import Logo from "../images/logo.png";
import Email from "../images/email.png";
import Paypal from "../images/paypal.png";
import Patreon from "../images/patreon.png";
import Kickstarter from "../images/kickstarter.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="grid-container">
          <div className="mainItem">
            <img src={Logo} alt="brand" width="80px" height="80px" />
            CyberJaya Smart+
          </div>
          <div className="directory">
            <h4>Directory</h4>
            <ul>
              <li>
                <a href="/">Content</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Commute</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Crime</a>
              </li>
            </ul>
          </div>
          <div className="support">
            <h4>Support Us</h4>
            <div>
              <a href="mailto:wongyimingvictor@sd.taylors.edu.my">
                <img src={Email} alt="email" width="32px" height="32px" />
                Email us
              </a>
            </div>
            <div>
              <a
                href="https://www.patreon.com/"
                target="_blank"
                rel="noreferrer"
                alt="patreon"
              >
                <img src={Patreon} alt="PayPal" width="32px" height="32px" />
                Patreon
              </a>
            </div>
            <div>
              <a
                href="https://www.kickstarter.com/"
                target="_blank"
                rel="noreferrer"
                alt="kickstarter"
              >
                <img
                  src={Kickstarter}
                  alt="PayPal"
                  width="32px"
                  height="32px"
                />
                Kickstarter
              </a>
            </div>
            <div>
              <a
                href="https://www.paypal.com/my/home"
                target="_blank"
                rel="noreferrer"
                alt="paypal"
              >
                <img src={Paypal} alt="PayPal" width="32px" height="32px" />
                PayPal
              </a>
            </div>
          </div>
          <div className="notice">&copy; Cyberjaya Smart+ 2021</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
