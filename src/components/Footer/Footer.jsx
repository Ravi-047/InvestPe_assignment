import React from "react";
import "./footer.css";

import logo from "../../assets/InvestPe_logo.png";
import googlePlay from "../../assets/googlePlay.png";

import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="home_footer">
      <footer>
        <div className="footer_logo">
          <img src={logo} alt="logo" />
          <p>
            Invest<span>Pe</span>
          </p>
        </div>

        <div className="footer_information">
          <div>
            <h4>Contact Us</h4>
            <p>8089225625</p>
            <p>conrtact@chotastock.com</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>Gateway</p>
            <p>Blog</p>
          </div>
          <div className="footer_googleplay">
            <h4>Download the App Now !</h4>
            <img src={googlePlay} alt="googlePlay" />
          </div>
        </div>

        <div className="footer_finduson">
          <h4>Find Us On</h4>
          <div className="footer_icons">
            <AiFillFacebook size={30} />
            <AiFillYoutube size={35} />
            <AiFillInstagram size={30} />
            <AiOutlineTwitter size={30} />
          </div>
        </div>

        <div className="footer_dis">
          <p>
            © 2022 Chhotastock Technologies Private Limited. All rights
            reserved. CIN - IJ74999WB2012PTC184187 Chhotastock Technologies
            Private Limited.
          </p>
          <br />
          <p>
            Chhotastock Techroloqies builds platforms & investment products to
            invest better in Indian investment asset classes. ln•æsting in
            Stocks/ETFs (Exchange Traded Funds) are subject to rnarket risks
            Read a' the related documents befo•e inæsting_ Irr•æstors should
            consider all risk factors and consult treir financial advisor before
            irøæstirg
          </p>
          <br />
          <p>
            Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR
            Layout Sector 6, Bengaluru, Karnataka - 560102, India
          </p>
          <br />
          <p>
            For any query / feedback / clarifications, email at
            contact@chhotastock.com
          </p>
          <br />
          <p>
            All Investment ideas, model portfolios & advisory are built by SEBI
            Registered Investment advisors (RIAs) & Chhotastock only facilitates
            investments in such baskets, portfolios.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
