import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useAuth0 } from "@auth0/auth0-react";

import leagueIcon from "../../icons/league.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    "&:hover": {
      background: "transparent",
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  buttons: {
    marginLeft: "auto",
    marginRight: "10px",
  },
  leftButton: {
    marginRight: "10px",
  },
  title: {
    textDecoration: "none",
    marginLeft: "50px",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const { loginWithRedirect, logout } = useAuth0();

  const signInOrOutButton = (isAuth) => {
    return isAuth ? (
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.leftButton}
          onClick={logout}
        >
          SIGN OUT
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/wishlist"
          startIcon={<FavoriteIcon />}
        >
          Wishlist
        </Button>
      </div>
    ) : (
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.leftButton}
          onClick={loginWithRedirect}
        >
          SIGN IN
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/sign-up"
        >
          SIGN UP
        </Button>
      </div>
    );
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            disableRipple
            classes={{ root: classes.logo }}
          >
            <img alt="logo" src={leagueIcon} style={{ height: "1.5em" }} />
          </IconButton>
          <Typography
            color="inherit"
            variant="h6"
            component={Link}
            to="/"
            className={classes.title}
          >
            HOME
          </Typography>
          <Typography
            color="inherit"
            variant="h6"
            component={Link}
            to="/champions"
            className={classes.title}
          >
            CHAMPIONS
          </Typography>
          <Typography
            color="inherit"
            variant="h6"
            component={Link}
            to="/skins"
            className={classes.title}
          >
            SKINS
          </Typography>
          {signInOrOutButton(props.isAuth)}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Navbar;
