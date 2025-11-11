import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#f5f5f5] ">
        {/* use on product p-4 md:px-16 md:py-8 */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
