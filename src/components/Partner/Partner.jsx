import React from "react";
import "./partner.css";
import kotak from "../../assets/Kotak_Securities_Logo.png";
import angleOne from "../../assets/angleOne.webp";
import upstox from "../../assets/upStox.png";
import amfi from "../../assets/amfi.png";
import lendbox from "../../assets/lendbox.png";
import liquiloans from "../../assets/liquiloans.png";

import siply from "../../assets/siply.png";
import jupiter from "../../assets/jupiter-logo.jpg";

const Partner = () => {
  return (
    <>
      <section className="partner_main">
        <div>
          <p>Some partners who make InvestPe products possible—</p>
          <div>
            <div>
              <img src={kotak} alt="kotak securities" className="img1" />
              <img src={angleOne} alt="angleOne" className="img2" />
              <img src={upstox} alt="upstox" className="img3" />
            </div>

            <div>
              <img src={amfi} alt="amfi" className="img4" />
              <img src={lendbox} alt="lendbox" className="img5" />
              <img src={liquiloans} alt="liquiloans" className="img6" />
            </div>
          </div>
        </div>

        <div>
          <p>
            ...and a few of the businesses building some incredible solutions
            with InvestPe
          </p>
          <div>
            <img src={siply} alt="siply" className="img7" />
            <img src={jupiter} alt="jupiter" className="img8" />
          </div>
        </div>
      </section>
      <div className="partner_border_bottom"></div>
    </>
  );
};

export default Partner;
