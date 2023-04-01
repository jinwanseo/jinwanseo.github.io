import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import useAxios from "../app/hooks/useAxios";

function Root() {
  useAxios();
  return (
    <Stack spacing={1}>
      <Typography>Jinwanseo Blog</Typography>
      <Outlet />
    </Stack>
  );
}

export default Root;
