import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    margin: "auto",
  },
  skinTypo: {
    marginTop: "50px",
  },
  title: {
    //marginBottom: theme.spacing(2),
  },
}));

function Home(props) {
  const [sales, setSales] = useState({
    champions: [],
    skins: [],
  });

  useEffect(() => {
    async function fetchData() {
      const urls = [
        "/api/champions/sales",
        "/api/skins/sales",
      ];
      try {
        const data = await Promise.all(
          urls.map((url) => fetch(url).then((response) => response.json()))
        );
        console.log(data);
        setSales({ champions: data[0], skins: data[1] });
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h5">
        Champions on Sale
      </Typography>
      <Carousel
        type="champion"
        className={classes.carousel}
        contents={sales.champions}
        isAuthenticated={props.isAuthenticated}
        user={props.user}
      />
      <Typography className={classes.skinTypo} variant="h5">
        Skins on Sale
      </Typography>
      <Carousel
        type="skin"
        contents={sales.skins}
        isAuthenticated={props.isAuthenticated}
        user={props.user}
      />
    </div>
  );
}

// reference https://www.fanatical.com/en/on-sale

export default Home;
