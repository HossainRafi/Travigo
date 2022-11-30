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
        </div>
      </div>
    </>
  );
};

export default Memory;
