// src/Components/PageLayout.jsx
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
