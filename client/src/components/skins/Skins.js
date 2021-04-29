import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "./Searchbar";
import Cards from "./SkinCards";
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

function Skins(props) {
  const skinsPerPage = 20;
  const [keywordAndCurrentPage, setKeywordAndCurrentPage] = useState({
    keyword: "",
    currentPage: 1,
  });
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    fetch("/api/skins")
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => {
        setSkins(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const classes = useStyles();

  function changePage(e, pageNumber) {
    setKeywordAndCurrentPage({
      ...keywordAndCurrentPage,
      currentPage: pageNumber,
    });
  }

  const filterSkins = () => {
    return skins.filter((skin) =>
      skin.name.toLowerCase().includes(keywordAndCurrentPage.keyword.toLocaleLowerCase())
    );
  };

  return (
    <div className={classes.root}>
      <h1>Skins</h1>
      <div>
        <div className={classes.searchBar}>
          <Searchbar setKeywordAndCurrentPage={setKeywordAndCurrentPage} />
        </div>
        <Cards
          isAuthenticated={props.isAuthenticated}
          user={props.user}
          skins={filterSkins().slice(
            keywordAndCurrentPage.currentPage * skinsPerPage - skinsPerPage,
            keywordAndCurrentPage.currentPage * skinsPerPage
          )}
        />
        <Pagination
          classes={{
            root: classes.paginationContainer,
            ul: classes.pagination,
          }}
          color="primary"
          page={keywordAndCurrentPage.currentPage}
          count={Math.ceil(filterSkins().length / skinsPerPage)}
          onChange={changePage}
        />
      </div>
    </div>
  );
}

export default Skins;
