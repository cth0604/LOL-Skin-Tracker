import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ChampionCard from "./ChampionCard";

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
        {props.champions.map((champion) => {
          return (
            <ChampionCard
              name={champion.name}
              key={champion.championID}
              img={champion.imageURL}
              championID={champion.championID}
              isAuthenticated={props.isAuthenticated}
              user={props.user}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default Cards;
