import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[70vh]">
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <footer className="bg-gray-200 h-[20vh] p-6 flex flex-col justify-between">
        <div className="flex">
          <div className="flex-1">
            <p>Home</p>
            <p>Shop All</p>
            <p>New Releases</p>
          </div>
          <div className="flex-1">
            <p>Links</p>
            <p>Returns</p>
            <p>Exchange Policy</p>
          </div>
          <div className="flex-1">
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="flex-1">
            <p>Instagram</p>
            <p>Whatsapp</p>
            <p>Facebook</p>
          </div>
        </div>
        <div className="w-full text-center">
          <p>&copy; 2024 MoonCreations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
