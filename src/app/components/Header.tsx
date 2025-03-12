import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">LOGO</div>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>🔍 🛒</div>
    </header>
  );
};

export default Header;
