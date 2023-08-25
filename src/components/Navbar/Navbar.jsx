import React from "react";
import nav_logo from "../../assets/InvestPe_logo.png";
import "./navbar.css";

import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

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
        <Link to="./product">
          <div className="nav_login">
            <BiLogIn size={25} /> Login
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
