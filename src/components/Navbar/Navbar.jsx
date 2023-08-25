import React from "react";
import nav_logo from "../../assets/InvestPe_logo.png";
import "./navbar.css";

import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_main">
        <div className="nav_logo">
          <img src={nav_logo} alt="investPe_logo" />
          <div className="nav_logo_slogan">
            <p>
              Invest<span>Pe</span>
            </p>
            <p>INVEST TO PAY. INVEST TO SPEND</p>
          </div>
        </div>

        <div className="nav_search">
          <AiOutlineSearch size={20} />
          <input
            type="text"
            name="search"
            placeholder="Search stocks, ETFs indices"
          />
        </div>
        <div className="nav_login">
          <BiLogIn /> Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
