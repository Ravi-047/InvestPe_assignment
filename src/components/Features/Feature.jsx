import React from "react";
import "./feature.css";
import Button from "../Button/Button";

import { GiSlashedShield } from "react-icons/gi";
import { PiLineSegmentsFill } from "react-icons/pi";
import { BsStopCircleFill, BsDropletHalf } from "react-icons/bs";

const Feature = () => {
  return (
    <div className="feature_main">
      <div className="feature_launch">
        <p>FEATURES</p>
        <p>Launch the most Engaging Invest-Tech Solutions</p>
        <p>
          We offer a suite of B2B Invest-tech solutions, that are cost-effective
          way to offer an engaging investment experience to your customers, with
          a faster time to market
        </p>

        <div>
          <Button name="Get Started" />
          <p>Learn More</p>
        </div>
      </div>
      <div className="feature_option">
        <div>
          <p>Protection</p>
          <GiSlashedShield size={60} style={{ margin: "auto" }} />
          <p>Data protection guarentees</p>
        </div>
        <div>
          <p>Tracking</p>
          <PiLineSegmentsFill size={60} style={{ margin: "auto" }} />
          <p>Track all your users' financial transactions</p>
        </div>
        <div>
          <p>Flexibility</p>
          <BsStopCircleFill size={60} style={{ margin: "auto" }} />
          <p>Custom made for your requirements</p>
        </div>
        <div>
          <p>Easiness</p>
          <BsDropletHalf size={60} style={{ margin: "auto" }} />
          <p>GO-to market in less than 7 days</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
