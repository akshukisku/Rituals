// import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const HomeWrapper = () => {
  console.log("Render")
  return (
    <div className="w-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeWrapper;
