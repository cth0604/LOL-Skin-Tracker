import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import SkinInfo from "./SkinInfo";
import Error from "../Error";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    margin: "auto",
  },
  skinInfo: {
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
}));
function Skin(props) {
  const { name } = useParams();

  const [skin, setSkin] = useState(null);
  const [skinNameTrue, setSkinNameTrue] = useState(true);

  useEffect(() => {
    fetch(`/api/skins/${name}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => {
        setSkin(result);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSkinNameTrue(false);
      });
  }, []);

  const classes = useStyles();

  return skin === null && skinNameTrue ? null : !skinNameTrue ? (
    <Error />
  ) : (
    <div className={classes.root}>
      <SkinInfo
        skin={skin}
        isAuthenticated={props.isAuthenticated}
        user={props.user}
      />
    </div>
  );
}

export default Skin;
