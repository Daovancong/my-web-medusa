import React from "react";

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

const FeaturedProducts = () => {
  return (
    <section className="p-4 grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md p-4 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover"
          />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-red-500 font-bold">{product.price}</p>
          <div className="flex  justify-between mt-2">
            <button className=" text-white px-4 py-2 rounded">💰</button>
            <button className=" text-white px-4 py-2 rounded">🛒</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;
