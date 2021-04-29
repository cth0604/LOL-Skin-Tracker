import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SkinCard from "./SkinCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Cards(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.skins.map((skin) => {
          return <SkinCard name={skin.name} img={skin.imageURL} isAuthenticated={props.isAuthenticated} user={props.user} key={skin.name} />;
        })}
      </Grid>
    </div>
  );
}

export default Cards;
