import React from "react";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "./context";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroUnit from "./components/layout/HeroUnit";
import Index from "./components/layout/Index";

const App = props => {
  return (
    <Provider>
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <HeroUnit />
        <Index />
        <Footer />
      </React.Fragment>
    </Provider>
  );
};

export default App;
