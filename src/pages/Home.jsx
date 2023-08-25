import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

import landing_image from ".././assets/investPe_landing_mobile.png";
import side_image from ".././assets/investPe_sideImage.png";
import bulb from ".././assets/essential_bulb.png";

import "../App.css";
import Button from "../components/Button/Button";
import stockData from "../constant/stockData";
import Partner from "../components/Partner/Partner";
import profile from ".././assets/person_img.avif";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="home_heading">
        <h1>Knowledge Based</h1>
        <h1>Investing & Trading</h1>
        <p>
          Ready-made solution + Deep Research + Disciplined Investing + Advanced
          Trading tools
        </p>
      </div>
      <div className="home_landing_image">
        <img src={landing_image} alt="landing" />
      </div>

      <div className="home_grid_area">
        <div className="home_grid_flex_area">
          <div className="home_grid_feature">
            <p>FEATURES</p>
            <p>SAVE NOW. BUY LATER.</p>
            <p>SIMPLE & REALISTIC</p>
            <p>
              Get what you love and save up over weeks or months to achieve it
              much lower price. Time & Flexibility on your side.
            </p>
            <div className="home_button_links">
              <Button name="Get the App" />
              <p>Learn More</p>
            </div>
          </div>
          <div className="home_grid_image">
            <img src={side_image} alt="side_image" />
          </div>
        </div>
      </div>

      <div className="home_essential_features">
        <h1>Essential Featuers for the Super</h1>
        <h1>
          Trader in You - All in <span>One Platform</span>
        </h1>

        <p>
          Save hours of research by using our readymade screens to find your
          next investment
        </p>

        <div>
          <img src={bulb} alt="bulb" />
          <p>
            30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES + STOCK PICKS & MUCH
            MORE
          </p>
        </div>
        <div className="home_button_links">
          <Button name="Get started now" />
          <p>See all features</p>
        </div>
      </div>

      <div className="home_stock_investing">
        <div className="home_stock_simplified">
          <h1>STOCK INVESTING, SIMPLIFIED</h1>
          <p>
            Online trading and investing in the market does not have to be
            boring.
          </p>
          <p>While we adopt a technology-led approach in</p>
          <p>
            building our product, we are keeping our users-investors and traders
            even before that
          </p>
        </div>

        <div className="home_stock_grid">
          {stockData.map((item) => {
            return (
              <div className="home_stock_border">
                <div key={item.id} className="home_each_stock">
                  <div>
                    <img src={item.image} alt="stock_img" />
                    <p>{item.title}</p>
                  </div>
                  <p>{item.des}</p>
                  <div>
                    <div>
                      <p>CAGR</p>
                      <p>{item.cagr}%</p>
                    </div>

                    <div>
                      <p>Min Amount</p>
                      <p>{item.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Partner />
      </div>

      <div className="home_reviews">
        <div>
          <p>
            Reviews From Early <br />
            Adopters
          </p>
          <div>
            <div>
              <p>156k+</p>
              <p>Registered Users</p>
            </div>
            <div>
              <p>$1.5Mn+</p>
              <p>Worth investing done</p>
            </div>
          </div>
        </div>

        <div className="home_reviews_section">
          <div>
            <div className="reviews_img">
              <img src={profile} alt="profile" />
            </div>
            <div className="reviews_title">
              Mahesh, Swiggy delivery partner, Bengaluru
            </div>
            <div className="reviews_dis">
              <span>
                <ImQuotesLeft />
              </span>
              <p>
                The onboarding experience on Chhotastock was very simple.. I did
                my first investment in equity market in less than 2 minutes
              </p>
              <span>
                <ImQuotesRight />
              </span>
            </div>
          </div>

          <div>
            <div className="reviews_dis">
              <span>
                <ImQuotesLeft />
              </span>
              <p>
                The onboarding experience on Chhotastock was very simple.. I did
                my first investment in equity market in less than 2 minutes
              </p>
              <span>
                <ImQuotesRight />
              </span>
            </div>
            <div className="reviews_title down_title">
              Mahesh, Swiggy delivery partner, Bengaluru
            </div>
            <div className="reviews_img_down">
              <img src={profile} alt="profile" />
            </div>
          </div>

          <div>
            <div className="reviews_img">
              <img src={profile} alt="profile" />
            </div>
            <div className="reviews_title">
              Mahesh, Swiggy delivery partner, Bengaluru
            </div>
            <div className="reviews_dis">
              <span>
                <ImQuotesLeft />
              </span>
              <p>
                The onboarding experience on Chhotastock was very simple.. I did
                my first investment in equity market in less than 2 minutes
              </p>
              <span>
                <ImQuotesRight />
              </span>
            </div>
          </div>

          <div>
            <div className="reviews_dis">
              <span>
                <ImQuotesLeft />
              </span>
              <p>
                The onboarding experience on Chhotastock was very simple.. I did
                my first investment in equity market in less than 2 minutes
              </p>
              <span>
                <ImQuotesRight />
              </span>
            </div>
            <div className="reviews_title down_title">
              Mahesh, Swiggy delivery partner, Bengaluru
            </div>
            <div className="reviews_img_down">
              <img src={profile} alt="profile" />
            </div>
          </div>

          <div>
            <div className="reviews_img">
              <img src={profile} alt="profile" />
            </div>
            <div className="reviews_title">
              Mahesh, Swiggy delivery partner, Bengaluru
            </div>
            <div className="reviews_dis">
              <span>
                <ImQuotesLeft />
              </span>
              <p>
                The onboarding experience on Chhotastock was very simple.. I did
                my first investment in equity market in less than 2 minutes
              </p>
              <span>
                <ImQuotesRight />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
