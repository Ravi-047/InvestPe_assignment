import React from "react";
import "./solution.css";

import so1 from "../../assets/investPe_solution1.png";
import phone from "../../assets/so_phone.png";
import deposit from "../../assets/deposit_2.png";
import fd from "../../assets/fd_investPe.png";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Solution = () => {
  return (
    <div className="solution_main">
      <p>SOLUTIOIN</p>
      <h1>
        Stay ahead with our <br /> Wealth-tech as a service
      </h1>

      <div className="solution_features">
        <div className="features_first">
          <div className="so_first">
            <div>
              <img src={so1} alt="so1" />
              <p>INVESTPE</p>
              <h2>Why does it make sense to start with us?</h2>
            </div>
            <div className="fisrt_second">
              <div>
                <p>We value you precious time.</p>
                <p>
                  No regulatory licenses required as we have everything for you
                  to get started.
                </p>
              </div>
              <div className="so_img">
                <img src={phone} alt="phone" />
              </div>
            </div>
          </div>
          <div className="so_second">
            <div>
              <p>MUTUAL FUNDS</p>
              <p>
                Get the complete MF Infra <br />& focus on customer engagement
              </p>

              <div className="so_check">
                <IoMdCheckmarkCircleOutline />{" "}
                <p>SEBI comdivliant KYC process</p>
              </div>
              <div className="so_check">
                <IoMdCheckmarkCircleOutline /> <p>Multi-AMC empanelments</p>
              </div>
              <div className="so_check">
                <IoMdCheckmarkCircleOutline /> <p>Transact & Track orders</p>
              </div>
              <div className="so_check">
                <IoMdCheckmarkCircleOutline /> <p>Advanced reporting</p>
              </div>
            </div>

            <div>
              <p>INDIAN EQUITY</p>
              <p>One gateway for all top securities</p>
              <div className="so_check">
                <IoMdCheckmarkCircleOutline />
                <p>
                  Enable stocks, ETFs & expert <br />
                  curated stock baskets in your app
                </p>
              </div>
              <div className="so_check">
                <IoMdCheckmarkCircleOutline />{" "}
                <p>Integrates with all major brokers</p>
              </div>
              <div className="so_check">
                <IoMdCheckmarkCircleOutline />
                <p>
                  Offer expert curated & monitored <br />
                  stock basket solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="features_second">
          <img src={deposit} alt="deposit" />
          <p>FIXED DEPOSITS</p>
          <p>Fully digital FDs for your users</p>
          <p>
            Offer fixed deposits on your app or website, from multiple banks.
            Embed a pre-built SDK and go live in weeks.
          </p>
          <div className="so_fd">
            <img src={fd} alt="fd" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
