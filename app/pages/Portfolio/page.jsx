import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";

const Portfolio = () => {
  return (
    <div className="px-6 sm:px-10 md:px-24 py-16 md:py-24">
      
      {/* Breadcrumb Section */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5 text-lg sm:text-xl md:text-2xl text--800">
        <span className="font-medium hover:text-blue-600 transition-colors cursor-pointer">
          Home
        </span>
        <MdKeyboardDoubleArrowRight className="text-indigo-600 text-2xl sm:text-3xl" />
        <span className="font-semibold text--900">Portfolio</span>
      </div>

      {/* Heading Section */}
      <h2 className="mt-8 text-center md:text-left text-2xl sm:text-3xl md:text-5xl font-bold text--900">
        My Portfolio
      </h2>
      
    </div>
  );
};

export default Portfolio;
