import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { useAuth0 } from "@auth0/auth0-react";

import theme from "./Theme";
import Navbar from "./components/navbar/Navbar";
import Account from "./components/Account";
import Champion from "./components/champion/Champion";
import Champions from "./components/champions/Champions";
import Error from "./components/Error";
import Home from "./components/home/Home";
import Skins from "./components/skins/Skins";
import Skin from "./components/skin/Skin";
import Wishlist from "./components/wishlist/Wishlist";
import Footer from "./components/footer/Footer";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  return isLoading ? null : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar isAuth={isAuthenticated} />
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <Home {...props} isAuthenticated={isAuthenticated} user={user} />
          )}
          exact
        />
        <Route
          path="/champions"
          render={(props) => (
            <Champions
              {...props}
              isAuthenticated={isAuthenticated}
              user={user}
            />
          )}
          exact
        />
        <Route
          path="/champion/:championID"
          render={(props) => (
            <Champion
              {...props}
              isAuthenticated={isAuthenticated}
              user={user}
            />
          )}
          exact
        />
        <Route
          path="/skins"
          render={(props) => (
            <Skins {...props} isAuthenticated={isAuthenticated} user={user} />
          )}
          exact
        />
        <Route
          path="/skin/:name"
          render={(props) => (
            <Skin {...props} isAuthenticated={isAuthenticated} user={user} />
          )}
          exact
        />
        <Route
          path="/wishlist"
          render={(props) => <Wishlist {...props} user={user} />}
          exact
        />
        <Route path="/account" component={Account} exact />
        <Route component={Error} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
