import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  name: {
    textAlign: "center",
  },
  heartIcon: {
    padding: 0,
    margin: "auto",
  },
  iconContainer: {
    padding: 0,
    paddingBottom: "5px",
  },
}));

function ChampionCard(props) {
  const classes = useStyles();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (props.isAuthenticated) {
      fetch(
        `/api/wishlist/champion/wishlisted/${encodeURIComponent(props.name)}/${props.user.email}`
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

  const addChampion = () => {
    if (props.isAuthenticated) {
      fetch("/api/wishlist/champion/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.user.email,
          name: props.name,
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
          setIsWishlisted(true);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  };

  const removeChampion = () => {
    if (props.isAuthenticated) {
      fetch("/api/wishlist/champion/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.user.email,
          name: props.name,
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
          setIsWishlisted(false);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  };

  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea component={Link} to={`/champion/${encodeURIComponent(props.championID)}`}>
          <CardMedia component="img" image={props.img} />
          <CardContent>
            <Typography className={classes.name} variant="h5" component="h2">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.iconContainer}>
          {isWishlisted ? (
            <IconButton className={classes.heartIcon} onClick={removeChampion}>
              <FavoriteIcon color="primary" />
            </IconButton>
          ) : (
            <IconButton className={classes.heartIcon} onClick={addChampion}>
              <FavoriteBorderIcon color="primary" />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ChampionCard;
