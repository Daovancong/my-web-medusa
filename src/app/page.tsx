import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CategoryList />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Home;
