import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

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

function SkinInfo(props) {
  const classes = useStyles();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (props.isAuthenticated) {
      fetch(
        `/api/wishlist/skin/wishlisted/${encodeURIComponent(props.skin.name)}/${props.user.email}`
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
        ? "/api/wishlist/skin/remove"
        : "/api/wishlist/skin/add";
      fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.user.email,
          name: props.skin.name,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setIsWishlisted(!isWishlisted);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  };

  return (
    <div className={classes.root}>
      <img src={props.skin.imageURL} className={classes.image} />
      <Grid
        container
        className={classes.gridContainer}
        direction="column"
        justify="space-around"
      >
        <Grid item>
          <Typography variant="h5">Skin: {props.skin.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">RP: {props.skin.originalRP === 0 ? "Special" : props.skin.originalRP}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Release Date: {new Date(props.skin.releaseDate).toDateString()}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            component={Link}
            to={`/champion/${encodeURIComponent(
              props.skin.champion.championID
            )}`}
          >
            Champion: {props.skin.champion.name}
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

export default SkinInfo;
