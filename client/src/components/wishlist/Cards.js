import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

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
        {props.items.map((item) => {
          return <Card name={item.name} key={item.name} img={item.imageURL} type={props.type} user={props.user} setRefresh={props.setRefresh} refresh={props.refresh} />;
        })}
      </Grid>
    </div>
  );
}

export default Cards;
