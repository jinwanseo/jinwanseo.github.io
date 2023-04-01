import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <Stack spacing={1}>
      <Outlet />
    </Stack>
  );
}

export default Root;
