import React from "react";
import PriceCard from "./PriceCard";

const Pricings = ({ pricingapi: { title, text, btn1, btn2, plans } }) => {
  return (
    <>
      <div className="my-16 relative">
        <div className="travigo-container">
          <div className="grid items-center justify-items-center mb-11 md:mb-7 text-center gap-2">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricings;
