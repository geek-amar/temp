import {
  LinearProgress,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { paginateJsonArray } from "utils";
import { useStyle } from "./AccountResult.style";
import MultiList from "./MultiList";
import DuoList from "./DuoList";
import List from "./List";

function getType(_tab) {
  switch (_tab) {
    case 1:
      return "duo";
    case 2:
      return "multi";

    default:
      return "single";
  }
}

const AccountResult = () => {
  const classes = useStyle();
  const [tab, setTab] = useState(0);

  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = React.useState(1);
  const perPage = 10;
  const [totalPages, setTotalPages] = React.useState(0);
  const [pageData, setPageData] = React.useState([]);

  const handlePageChange = (ev, value) => {
    let pgData = paginateJsonArray(data, value, perPage);
    setPage(value);
    setPageData(pgData.data);
  };

  useEffect(() => {
    setLoading(true);
    setData([]);
    setPage(1);

    async function fetchTab(_tab) {
      setLoading(true);
      try {
        let type = getType(_tab);
        let token = JSON.parse(localStorage.getItem("token"));
        let res = await fetch(
          `https://backend.playikc.in/result/report?type=${type}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let data = await res.json();
        if(Array.isArray(data.payload)){
          setData(data.payload);
        } else {
          setData(data.payload?.results)
        }
        let { pageCount, data: _data } = paginateJsonArray(
          data.payload.results ?? data.payload,
          1,
          perPage
        );
        setPageData(_data);
        setTotalPages(pageCount);
      } catch (e) {
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    }

    fetchTab(tab);
  }, [tab]);

  console.info(data)

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span onClick={() => setTab(0)} className={tab === 0 ? "color" : ""}>
          Single Player
        </span>
        <span onClick={() => setTab(1)} className={tab === 1 ? "color" : ""}>
          Duo Player
        </span>
        <span onClick={() => setTab(2)} className={tab === 2 ? "color" : ""}>
          Multiplayer
        </span>
      </div>
      {loading && <LinearProgress color="warning" />}
      <div className={classes.bottom}>
        {!loading ? (
          tab === 0 ? (
            <>
              {pageData.map((report, index) => {
                return <List key={index} report={report} />;
              })}
            </>
          ) : tab === 1 ? (
            <>
              {pageData.map((report, index) => {
                return <DuoList key={index} report={report} />;
              })}
            </>
          ) : (
            <>
              {pageData.map((report, index) => {
                return <MultiList key={index} report={report} />;
              })}
            </>
          )
        ) : null}
      </div>
      <Stack
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        // spacing={2}
      >
        <Pagination
          classes={{ root: classes.pagination }}
          count={totalPages}
          page={page}
          disabled={loading}
          variant="outlined"
          hidePrevButton
          hideNextButton
          onChange={handlePageChange}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </Stack>
    </div>
  );
};

export default AccountResult;


