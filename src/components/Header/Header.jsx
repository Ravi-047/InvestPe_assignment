import React from "react";
import headerData from "../../constant/header.data";
import "./header.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Header = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel_button_group">
        <button
          className={currentSlide === 0 ? "disable" : "left"}
          onClick={() => previous()}
        >
          <FaAngleLeft />
        </button>
        <button onClick={() => next()} className="right">
          <FaAngleRight />
        </button>
      </div>
    );
  };
  return (
    <header className="header_main">
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={2000}
          autoPlay={true}
          transitionDuration={500}
          centerMode={true}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
        >
          {headerData.map((item, index) => {
            return (
              <div key={index} className="header_wrapper">
                <p>{item.name}</p>
                <p className="header_warapper_price">{item.price}</p>
                <p
                  className={`${
                    item.stockValue < 0.45 ? "redColor" : "greenColor"
                  }`}
                >
                  {item.stockValue < 0.45 ? (
                    <AiOutlineCaretDown />
                  ) : (
                    <AiOutlineCaretUp />
                  )}
                  {item.stockValue}%
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </header>
  );
};

export default Header;
