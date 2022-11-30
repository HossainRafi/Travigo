import React from "react";

const Memory = ({ memory: { title, text, subtitle, img, experience } }) => {
  return (
    <>
      <div className="relative my-16 md:mb-7">
        <div className="travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse">
          <div className="flex items-center justify-start lg:justify-center w-full max-w-md">
            <img
              src={img}
              alt="memory/img"
              className="w-auto h-[55vh] object-fill"
            />
          </div>
          <div className="grid items-center w-full max-w-2xl lg:text-center">
            <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
              {title}
            </h1>
            <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
              {subtitle}
            </h1>
            <p className="text-base my-5 sm:text-sm">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
