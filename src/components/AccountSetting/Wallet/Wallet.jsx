import {
  LinearProgress,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import api from "api";
import NoDataFound from "common/NoDataFound/NoDataFound";
import React from "react";
import { paginateJsonArray } from "utils";
import { useStyle } from "../ResultDetails/AccountResult.style";
import List from "./List";

const Wallet = () => {
  const classes = useStyle();
  const [busy, setBusy] = React.useState(true);
  const [transactions, setTransactions] = React.useState([]);

  const [page, setPage] = React.useState(1);

  const [pageData, setPageData] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    setBusy(true);
    async function fetchWalletTransactions() {
      let data = await api.ikcplay.fetch(
        "/user/fetchWalletTransacions?pagination=1"
      );

      setTransactions(data.payload.transactions);
      let { pageCount, data: _data } = paginateJsonArray(
        data.payload.transactions,
        1,
        10
      );
      setPageData(_data);
      setTotalPages(pageCount);
      setBusy(false);
    }

    fetchWalletTransactions();
  }, []);

  const handlePageChange = (ev, value) => {
    let pgData = paginateJsonArray(transactions, value, 10);
    setPage(value);
    setPageData(pgData.data);
  };

  return (
    <>
      {busy && <LinearProgress color="warning" />}
      <div className={classes.container}>
        {!busy && pageData.length === 0 && (
          <NoDataFound message="No transactions found" />
        )}
        <div className={classes.bottom}>
          {pageData.map((transaction, index) => {
            return (
              <List
                key={index}
                transaction={transaction?.transaction || []}
              />
            );
          })}
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
            disabled={busy}
            variant="outlined"
            hidePrevButton
            hideNextButton
            onChange={handlePageChange}
            renderItem={(item) => <PaginationItem {...item} />}
          />
        </Stack>
      </div>
    </>
  );
};

export default Wallet;
