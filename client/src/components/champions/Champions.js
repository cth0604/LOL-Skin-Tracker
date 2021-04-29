import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "./Searchbar";
import Cards from "./ChampionCards";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    margin: "auto",
  },
  searchBar: {
    marginBottom: theme.spacing(4),
  },
  paginationContainer: {
    marginTop: theme.spacing(4),
  },
  pagination: {
    justifyContent: "center",
  },
}));

function Champions(props) {
  const championsPerPage = 20;
  const [keywordAndCurrentPage, setKeywordAndCurrentPage] = useState({
    keyword: "",
    currentPage: 1,
  });
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetch("/api/champions")
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => {
        setChampions(result);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  }, []);

  const classes = useStyles();

  const changePage = (e, pageNumber) => {
    setKeywordAndCurrentPage({
      ...keywordAndCurrentPage,
      currentPage: pageNumber,
    });
  };

  const filterChampions = () => {
    return champions.filter((champion) =>
      champion.name.toLowerCase().includes(keywordAndCurrentPage.keyword.toLocaleLowerCase())
    );
  };

  return (
    <div className={classes.root}>
      <h1>Champions</h1>
      <div>
        <div className={classes.searchBar}>
          <Searchbar setKeywordAndCurrentPage={setKeywordAndCurrentPage} />
        </div>
        <Cards
          isAuthenticated={props.isAuthenticated}
          user={props.user}
          champions={filterChampions().slice(
            keywordAndCurrentPage.currentPage * championsPerPage - championsPerPage,
            keywordAndCurrentPage.currentPage * championsPerPage
          )}
        />
        <Pagination
          classes={{
            root: classes.paginationContainer,
            ul: classes.pagination,
          }}
          color="primary"
          page={keywordAndCurrentPage.currentPage}
          count={Math.ceil(filterChampions().length / championsPerPage)}
          onChange={changePage}
        />
      </div>
    </div>
  );
}

export default Champions;
