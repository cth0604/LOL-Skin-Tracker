import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  name: {
    textAlign: "center",
  },
  deleteIcon: {
    padding: 0,
    margin: "auto",
  },
  iconContainer: {
    padding: 0,
    paddingBottom: "5px",
  },
}));

function ItemCard(props) {
  const removeFromWishlist = () => {
    fetch(`/api/wishlist/${props.type}/remove`, {
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
        props.setRefresh(!props.refresh);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea
          component={Link}
          to={`/${props.type}/${encodeURIComponent(props.name)}`}
        >
          <CardMedia component="img" image={props.img} />
          <CardContent>
            <Typography className={classes.name} variant="h5" component="h2">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.iconContainer}>
          <IconButton
            className={classes.deleteIcon}
            onClick={removeFromWishlist}
          >
            <DeleteIcon color="primary" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ItemCard;
