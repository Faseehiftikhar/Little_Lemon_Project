import FooterImg from "../images/logo/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-md navbar-light bg-light pd mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="footer-logo" src={FooterImg} alt="Little Lemon Logo"  />
        </Link>
        <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>NAVIGATION</h4>
            <Link className="footer-block" to="/">
              Home
            </Link>
            <Link className="footer-block" to="/about">
              About
            </Link>
            <Link className="footer-block" to="/menu">
              Menu
            </Link>
            <Link className="footer-block" to="/reserve">
              Reserve
            </Link>
          </div>
        <div className="col-full col-half col-3rd mb-5 foot-center">
          <h4>SOCIAL MEDIA</h4>
          <a className="footer-block" href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a className="footer-block" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a className="footer-block" href="https://twitter.com" target="_blank" rel="noreferrer">X/Twitter</a>
          <a className="footer-block" href="https://www.tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
        </div>
        <div className="col-full col-half col-3rd mb-5 foot-center">
          <h4>CONTACT US</h4>
          <p className="footer-block">123 Street, 321203 Chicago</p>
          <a className="footer-block" href="tel:+11234567890">+112 345 678 90</a>
          <a className="footer-block" href="mailto: CSR@littlelemon.com">CSR@littlelemon.com</a>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
