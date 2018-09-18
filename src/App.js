import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "./context";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./components/layout/theme";

const App = props => {
  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
};

export default App;
