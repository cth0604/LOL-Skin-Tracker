import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    margin: "auto",
  },
  wishlistText: {
    marginBottom: "30px",
  },
  skinsText: {
    marginTop: "20px"
  },
}));

function Wishlist(props) {
  const classes = useStyles();

  const [wishlist, setWishlist] = useState({ champions: [], skins: [] });
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch(`/api/wishlist/get/${props.user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => setWishlist(data))
      .catch((err) => {
        console.error("Error: ", err);
      });
  }, [refresh]);

  return (
    <div className={classes.root}>
      <Typography className={classes.wishlistText} variant="h3">Wishlist</Typography>
      <Typography variant="h4">Champions</Typography>
      <Cards
        items={wishlist.champions}
        type={"champion"}
        user={props.user}
        setRefresh={setRefresh}
        refresh={refresh}
      />
      <Typography className={classes.skinsText} variant="h4">Skins</Typography>
      <Cards
        items={wishlist.skins}
        type={"skin"}
        user={props.user}
        setRefresh={setRefresh}
        refresh={refresh}
      />
    </div>
  );
}

export default withAuthenticationRequired(Wishlist, {
  onRedirecting: () => null,
});
