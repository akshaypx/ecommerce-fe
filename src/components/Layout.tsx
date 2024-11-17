import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[70vh] max-w-[900px] m-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
