import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

import ChampionInfo from "./ChampionInfo";
import Error from "../Error";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    margin: "auto",
  },
  championInfo: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "50%",
    borderRadius: "10px",
  },
  gridContainer: {
    width: "30%",
    textAlign: "center",
  },
  gridItem: {
    maxWidth: "100%",
  },
  skinsText: {
    marginTop: "30px",
    marginBottom: "10px",
  }
}));
function Champion(props) {
  const { championID } = useParams();

  const [champion, setChampion] = useState(null);
  const [championIDTrue, setChampionIDTrue] = useState(true);

  useEffect(() => {
    fetch(`/api/champions/${championID}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => {
        setChampion(result);
      })
      .catch((error) => {
        console.error("Error:", error);
        setChampionIDTrue(false);
      });
  }, []);

  const classes = useStyles();

  return champion === null && championIDTrue ? null : !championIDTrue ? (
    <Error />
  ) : (
    <div className={classes.root}>
      <ChampionInfo
        champion={champion}
        isAuthenticated={props.isAuthenticated}
        user={props.user}
      />
      <Typography className={classes.skinsText} variant="h4" align="center">
        Skins
      </Typography>
      <Grid container spacing={3}>
        {champion.skins.map((skin) => {
          return (
            <Grid item xs={3}>
              <Card key={skin.name}>
                <CardActionArea component={Link} to={`/skin/${encodeURIComponent(skin.name)}`}>
                  <CardMedia component="img" image={skin.imageURL} />
                  <CardContent>
                    <Typography
                      className={classes.name}
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      {skin.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Champion;
