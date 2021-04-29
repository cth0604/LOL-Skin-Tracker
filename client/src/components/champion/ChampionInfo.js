import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
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
}));

function ChampionInfo(props) {
  const classes = useStyles();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (props.isAuthenticated) {
      fetch(
        `/api/wishlist/champion/wishlisted/${encodeURIComponent(props.champion.name)}/${props.user.email}`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => setIsWishlisted(data))
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  }, []);

  const onClickWishlist = () => {
    if (props.isAuthenticated) {
      const apiURL = isWishlisted
        ? "/api/wishlist/champion/remove"
        : "/api/wishlist/champion/add";
      fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.user.email,
          name: props.champion.name,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          setIsWishlisted(!isWishlisted);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  };

  return (
    <div className={classes.root}>
      <img src={props.champion.imageURL} className={classes.image} />
      <Grid
        container
        className={classes.gridContainer}
        direction="column"
        justify="space-around"
      >
        <Grid item>
          <Typography variant="h5">Champion: {props.champion.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">RP: {props.champion.originalRP}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Release Date: {new Date(props.champion.releaseDate).toDateString()}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={onClickWishlist}>
            {isWishlisted ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChampionInfo;
