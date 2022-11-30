import React from "react";

const Banner = ({ bannerAPI: { title, text, btnText, imgSrc } }) => {
  return (
    <>
      <div className="relative w-full max-w-5xl ml-auto mr-auto mt-0 mb-3 xl:w-[95vw] rounded-lg">
        <div className="relative flex items-center">
          <img
            src={imgSrc}
            alt="banner/api"
            className="h-[35vh] w-full rounded-lg"
          />
        </div>
        <div className="absolute top-24 left-12 w-full flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14">
          <h1 className="text-3xl font-bold text-slate-900 drop-shadow-lg filter">
            {title}
          </h1>
          <p className="text-base sm:text-sm">{text}</p>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
