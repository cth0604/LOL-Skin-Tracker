import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
  },
  salePercent: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "10px",
    margin: "auto 10px auto 0px",
    padding: "5px",
  },
  prices: {
    margin: "auto 0px",
  },
  name: {
    margin: "auto 0px",
    //color: theme.palette.secondary.main
  },
  favoriteIcon: {
    padding: 0,
    margin: "auto",
  },
  iconContainer: {
    padding: 0,
    paddingBottom: "5px",
  },
  cardContent: {
    padding: "10px 10px 10px 5px",
  },
  originalRP: {
    textDecorationLine: "line-through",
  },
}));

export default function ImageCard(props) {
  const classes = useStyles();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (props.isAuthenticated) {
      fetch(
        `/api/wishlist/${props.type}/wishlisted/${props.content.name}/${props.user.email}`
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
        ? `/api/wishlist/${props.type}/remove`
        : `/api/wishlist/${props.type}/add`;
      fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.user.email,
          name: props.content.name,
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
    <Card className={classes.root}>
      <CardActionArea
        component={Link}
        to={`/${props.type}/${
          props.type === "champion"
            ? encodeURIComponent(props.content.championID)
            : encodeURIComponent(props.content.name)
        }`}
      >
        <CardMedia component="img" image={props.content.imageURL} />
        <CardContent className={classes.cardContent}>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Grid container>
                <Grid item classes={{ root: classes.salePercent }}>
                  <Typography variant="h6">
                    -
                    {Math.ceil(
                      100 -
                        (props.content.saleRP / props.content.originalRP) * 100
                    )}
                    %
                  </Typography>
                </Grid>
                <Grid item classes={{ root: classes.prices }}>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="caption"
                        className={classes.originalRP}
                      >
                        {props.content.originalRP} RP
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">
                        {props.content.saleRP} RP
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item classes={{ root: classes.name }}>
              <Typography variant="h6">{props.content.name}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.iconContainer}>
        <IconButton className={classes.favoriteIcon} onClick={onClickWishlist}>
          {isWishlisted ? (
            <FavoriteIcon color="primary" />
          ) : (
            <FavoriteBorderIcon color="primary" />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}
