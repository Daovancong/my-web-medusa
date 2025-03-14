// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFilter } from "react-icons/fa";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";

const products = [
  { id: 1, name: "Product 1", price: "$100", image: "/images/anh1.jpg" },
  { id: 2, name: "Product 2", price: "$120", image: "/images/anh2.jpg" },
  { id: 3, name: "Product 3", price: "$150", image: "/images/anh3.jpg" },
  { id: 4, name: "Product 4", price: "$90", image: "/images/anh4.jpg" },
  { id: 5, name: "Product 1", price: "$100", image: "/images/anh1.jpg" },
  { id: 6, name: "Product 2", price: "$120", image: "/images/anh2.jpg" },
  { id: 7, name: "Product 3", price: "$150", image: "/images/anh3.jpg" },
  { id: 8, name: "Product 4", price: "$90", image: "/images/anh4.jpg" },
  { id: 9, name: "Product 1", price: "$100", image: "/images/anh1.jpg" },
  { id: 10, name: "Product 2", price: "$120", image: "/images/anh2.jpg" },
  { id: 11, name: "Product 3", price: "$150", image: "/images/anh3.jpg" },
  { id: 12, name: "Product 4", price: "$90", image: "/images/anh4.jpg" },
  { id: 13, name: "Product 1", price: "$100", image: "/images/anh1.jpg" },
  { id: 14, name: "Product 2", price: "$120", image: "/images/anh2.jpg" },
  { id: 15, name: "Product 3", price: "$150", image: "/images/anh3.jpg" },
  { id: 16, name: "Product 4", price: "$90", image: "/images/anh4.jpg" },
];
const brands = [
  { id: 1, name: "Adidas", image: "/images/adidas.jpg" },
  { id: 2, name: "Puma", image: "/images/puma.jpg" },
  { id: 3, name: "Nike", image: "/images/nike.jpg" },
  { id: 4, name: "New Balance", image: "/images/thuongdinh.jpg" },
];
const FeaturedBrands = [
  { id: 1, name: "Adidas", image: "/images/jordan1.jpg" },
  { id: 2, name: "Puma", image: "/images/puma2.jpg" },
  { id: 3, name: "Nike", image: "/images/nike2.jpg" },
  { id: 4, name: "New Balance", image: "/images/adidas2.jpg" },
];
const newProducts = [
  {
    id: 1,
    name: "Product 1",
    price: "$100",
    image: "/images/adidas1.jpg",
    description: "High-quality running shoes.",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$120",
    image: "/images/jordan1.jpg",
    description: "Comfortable sneakers for daily use.",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$150",
    image: "/images/nike1.jpg",
    description: "Stylish sports shoes for all occasions.",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$90",
    image: "/images/puma1.jpg",
    description: "Lightweight and durable shoes.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};
const HomePage = () => {
  const [filter, setFilter] = useState("");

  const filteredProducts = newProducts.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Banner />
      <section className="p-4">
        {/* Brand Slider */}
        <div className="border-t-4 border-gray-500 pt-6 mt-6">
          {/* Brand Slider */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Shop by Brand</h2>
            <Slider {...sliderSettings}>
              {brands.map((brand) => (
                <div key={brand.id} className="p-2 text-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={70}
                    height={30}
                    className="w-full h-40 object-cover"
                  />
                  <h3 className="mt-2 font-semibold">{brand.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* New Products */}
        <div className="border-t-4 border-gray-500 pt-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">New Arrivals</h2>
            <button
              onClick={() => setFilter("")}
              className="flex items-center bg-gray-200 px-4 py-2 rounded"
            >
              <FaFilter className="mr-2" /> Reset Filter
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md p-4 text-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-red-500 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}

        {/* Featured Brands */}
        <div className="border-t-4 border-gray-500 pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Featured Brands</h2>
          <div className="grid grid-cols-4 gap-4">
            {FeaturedBrands.map((Fbrand) => (
              <div
                key={Fbrand.id}
                className="p-4 text-center border border-gray-300 rounded-lg shadow-md"
              >
                <Image
                  src={Fbrand.image}
                  alt={Fbrand.name}
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <h3 className="mt-2 font-semibold">{Fbrand.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="my-6 border-t-4 border-gray-500">
          <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 text-center border border-gray-300 rounded-lg shadow-md"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <h3 className="mt-2 font-semibold">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
