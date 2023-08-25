import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Partner from "../components/Partner/Partner";
import ProductNav from "../components/ProductNav/ProductNav";
import card from ".././assets/three_card.png";

import { FaChevronCircleDown } from "react-icons/fa";

import "./productPage.css";
import Button from "../components/Button/Button";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <ProductNav />

      <div className="productPage_stack_wrapper">
        <div className="productPage_stack">
          <div>
            <h1>INVESTMENT STACK</h1>
            <h2>for India</h2>

            <p>Elevate Your Investment Strategy</p>
            <p>
              with Our <span>Comprehensive APIs</span>
            </p>
          </div>

          <div>
            <p>
              Launch financial services in a matter of days. Take your pick from
              our flexible APIs, SDKs, or ready-to-use screens.
            </p>
            <div>
              <p>See Our Products</p> <FaChevronCircleDown />
            </div>

            <div>
              <Button name="Contact Us" />
            </div>
          </div>
        </div>
        <img src={card} alt="card" className="img_three_card" />
      </div>

      <Partner />
      <Footer />
    </div>
  );
};

export default ProductPage;
