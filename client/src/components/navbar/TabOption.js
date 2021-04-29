import React from "react";

import Tab from "@material-ui/core/Tab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "react-router-dom/Link";

const useStyles = makeStyles((theme) => ({
  tab: {
    padding: 0,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function TabOption(props) {
  const classes = useStyles();
  return (
    <Tab component={Link} className={classes.tab} disableRipple {...props} />
  );
}
