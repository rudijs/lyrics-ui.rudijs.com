import React from "react";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import HeroUnit from "./layout/HeroUnit";

const App = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <HeroUnit />
      <Footer />
    </React.Fragment>
  );
};

export default App;
