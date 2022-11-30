import React from "react";
import {
  Navbar,
  Hero,
  Footer,
  Memory,
} from "./components";
import {
  hero,
  navlinks,
  memory,
  footerAPI,
} from "./data/travigodata";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
