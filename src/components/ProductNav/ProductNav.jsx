import React, { useState } from "react";
import nav_logo from "../../assets/InvestPe_logo.png";

import { FaCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import mutual from "../../assets/mutual_fund.png";
import equity from "../../assets/Indian_Equity.png";
import gold from "../../assets/digital_gold.png";
import deposit from "../../assets/fixed_diposits.png";
import market from "../../assets/market_search.png";
import history from "../../assets/historical_performance.png";

import "./prductnav.css";

const ProductNav = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };
  return (
    <nav>
      <div className="productNav_main">
        <div className="nav_logo">
          <img src={nav_logo} alt="investPe_logo" />
          <p>
            Invest<span>Pe</span>
          </p>

          <div className="productNav_gateway">
            <p>Gateway</p>
            <FaCircle />
          </div>
        </div>

        <ul className="nav_list">
          <li
            className={`nav_item ${activeItem === "product" ? "active" : ""}`}
            onClick={() => handleItemClick("product")}
          >
            Product <FiChevronDown size={25} />
            {activeItem === "product" && (
              <ul className="dropdown">
                <div className="product_dropdown_flex">
                  <div>
                    <p className="product_investment">INVESTMENTS</p>

                    <div className="product_option">
                      <img src={mutual} alt="mutual" />
                      <div>
                        <p>Mutual Funds</p>
                        <p>E2E infrastructure for mutual fund investing</p>
                      </div>
                    </div>

                    <div className="product_option">
                      <img src={equity} alt="equity" />
                      <div>
                        <p>Indian Equity</p>
                        <p>
                          Ready-made stock baskets with major broker
                          integrations
                        </p>
                      </div>
                    </div>

                    <div className="product_option">
                      <img src={gold} alt="gold" />
                      <div>
                        <p>Digital Gold</p>
                        <p>Allow your users to buy & sell digital gold</p>
                      </div>
                    </div>

                    <div className="product_option">
                      <img src={deposit} alt="deposit" />
                      <div>
                        <p>Fixed Deposits</p>
                        <p>
                          Book FDs in one-click without opening a bank account
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="product_investment">DATA</p>
                    <div className="product_option">
                      <img src={market} alt="market" />
                      <div>
                        <p>Mutual Funds</p>
                        <p>E2E infrastructure for mutual fund investing</p>
                      </div>
                    </div>

                    <div className="product_option">
                      <img src={history} alt="history" />
                      <div>
                        <p>Indian Equity</p>
                        <p>
                          Ready-made stock baskets with major broker
                          integrations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            )}
          </li>
          <li
            className={`nav_item ${activeItem === "aboutus" ? "active" : ""}`}
            onClick={() => handleItemClick("aboutus")}
          >
            About Us
          </li>
          {/* Add more options here */}
        </ul>
      </div>
    </nav>
  );
};

export default ProductNav;
