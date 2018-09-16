import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "./context";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

const App = props => {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
