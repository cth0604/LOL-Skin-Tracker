import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    margin: "auto",
  },
}));

function Account() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Account Settings</Typography>
    </div>
  );
}

export default withAuthenticationRequired(Account, {
  onRedirecting: () => null,
});
