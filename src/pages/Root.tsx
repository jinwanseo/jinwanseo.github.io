import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

console.log(process.env.PUBLIC_URL);

function Root() {
  return (
    <Stack spacing={1}>
      <Typography>Jinwanseo Blog</Typography>
      <Outlet />
    </Stack>
  );
}

export default Root;
