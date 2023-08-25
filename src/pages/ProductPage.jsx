import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Partner from "../components/Partner/Partner";
import ProductNav from "../components/ProductNav/ProductNav";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <ProductNav />
      <Partner />
      <Footer />
    </div>
  );
};

export default ProductPage;
