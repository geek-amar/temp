import { Box, Typography } from "@mui/material";
import NotFound from "assets/images/pageNotFound.webp";

const NoDataFound = ({message}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <img src={NotFound} width="300px" alt="pagenot found" />
      <div>
        <Typography textAlign="center" color="white" variant="h5" component="p">
          {message}
        </Typography>
      </div>
    </Box>
  );
};

export default NoDataFound;
