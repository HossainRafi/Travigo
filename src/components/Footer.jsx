import React from "react";

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
    <>
      <footer className="bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7">
        <div className="grid items-center grid-cols-3 justify-items-center">
          {titles?.map((val, i) => (
            <div key={i} className="grid items-center justify-items-center">
              <h1 className="text-xl lg:text-base uppercase font-semibold">
                {val.title}
              </h1>
            </div>
          ))}
          {links?.map((list, i) => (
            <ul
              key={i}
              className="grid items-center justify-items-center gap-1"
            >
              {list?.map((val, i) => (
                <li key={i} className="font-mono text-sm sm:text-xs">
                  {val.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
