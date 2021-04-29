import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "./Copyright";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import leagueIcon from "../../icons/league.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    textAlign: "center",
  },
  typography: {
    fontSize: ".9rem",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    textDecoration: "none",
    padding: "auto",
  },
  gridItem: {
    textAlign: "center",
  },
  logo: {
    "&:hover": {
      background: "transparent",
    },
  },
  gridContainer: {
    marginBottom: "10px",
  },
}));

const footers = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "CHAMPIONS",
    to: "/champions",
  },
  {
    title: "SKINS",
    to: "/skins",
  },
  // {
  //   title: "ABOUT US",
  //   to: "/",
  // },
  // {
  //   title: "CONTACT",
  //   to: "/",
  // },
  // {
  //   title: "ACCOUNT",
  //   to: "/account",
  // },
];

function Footer(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container justify="space-evenly" className={classes.gridContainer}>
        {footers.map((footer) => (
          <Grid className={classes.gridItem} item key={footer.title}>
            <Typography
              component={Link}
              to={footer.to}
              variant="h6"
              color="textPrimary"
              align="center"
              className={classes.typography}
            >
              {footer.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <IconButton
        component={Link}
        to="/"
        disableRipple
        classes={{ root: classes.logo }}
      >
        <img
          alt="logo"
          src={leagueIcon}
          style={{ height: "2em", fill: "grey" }}
        />
      </IconButton>
      <div>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Footer;
