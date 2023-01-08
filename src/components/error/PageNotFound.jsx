import { Box, Typography } from "@mui/material";
import NotFound from "assets/images/pageNotFound.webp";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="10rem 0"
    >
      <img src={NotFound} width="300px" alt="pagenot found" />
      <div>
        <Typography textAlign="center" color="white" variant="h5" component="p">
          This page isn’t available. Sorry about that.
          <br /> Try searching for something else.
        </Typography>
      </div>
    </Box>
  );
};

export default PageNotFound;
