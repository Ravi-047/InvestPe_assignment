import React from "react";
import "./contact.css";

import mutual from "../../assets/mutual_fund.png";
import equity from "../../assets/Indian_Equity.png";
import gold from "../../assets/digital_gold.png";
import deposit from "../../assets/fixed_diposits.png";

const Contact = () => {
  return (
    <div className="contact_main">
      <h1>How would you like to work with us?</h1>
      <p>
        Tell us more about yourself, and we'll <br /> reach out to you as soon
        as possible.
      </p>

      <div className="contact_details">
        <div>
          <div>
            <p>Work email</p>
            <input type="email" name="email" placeholder="abc@xyz.com" />
          </div>

          <div>
            <p>Company Name</p>
            <input type="text" name="company" />
          </div>

          <div>
            <p>Mobie Number</p>
            <input type="number" name="mobile" />
          </div>
        </div>

        <div>
          <p>Which products are you interested in?</p>
          <div className="contact_product_interest">
            <div>
              <p>Mutual Funds</p>
              <p>E2E infrastructure for mutual fund investing</p>
              <div className="contact_img">
                <img src={mutual} alt="mutual" />
              </div>
            </div>
            <div>
              <p>Indian Equity</p>
              <p>Stock gateway & stock baskets</p>
              <div className="contact_img">
                <img src={equity} alt="equity" />
              </div>
            </div>
            <div>
              <p>Digital Gold</p>
              <p>Buy & Sell digital gold hassle free</p>
              <div className="contact_img">
                <img src={gold} alt="gold" />
              </div>
            </div>
            <div>
              <p>Fixed Deposits</p>
              <p>Book FDs in lclick w/o opening a bank ac</p>
              <div className="contact_img">
                <img src={deposit} alt="deposit" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_submit">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
