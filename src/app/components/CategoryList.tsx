"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { id: 1, name: "Adidas", image: "/images/adidas.jpg" },
  { id: 2, name: "Puma", image: "/images/puma.jpg" },
  { id: 3, name: "Nike", image: "/images/nike.jpg" },
  { id: 4, name: "New Balance", image: "/images/nb.jpg" },
];

const newProducts = [
  { id: 1, name: "Product 1", price: "$100", image: "/images/anh1.jpg" },
  { id: 2, name: "Product 2", price: "$120", image: "/images/anh2.jpg" },
  { id: 3, name: "Product 3", price: "$150", image: "/images/anh4.jpg" },
  { id: 4, name: "Product 4", price: "$90", image: "/images/anh3.jpg" },
];

const CategoryList = () => {
  return (
    <section className="p-4">
      {/* Brand Slider */}
      <div className="mb-6">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
        >
          {brands.map((brand) => (
            <div key={brand.id} className="p-2 text-center">
              <Image
                src={brand.image}
                alt={brand.name}
                width={150}
                height={150}
                className="w-full h-40 object-cover"
              />
              <h3 className="mt-2 font-semibold">{brand.name}</h3>
            </div>
          ))}
        </Slider>
      </div>

      {/* New Products */}
      <div>
        <h2 className="text-xl font-semibold mb-4">New Arrivals</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {newProducts.map((product) => (
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
              <p className="text-red-500 font-bold">{product.price}</p>
              <div className="flex justify-between  mt-2">
                <button className=" text-white px-4 py-2 rounded">💰</button>
                <button className=" text-white px-4 py-2 rounded">🛒</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
