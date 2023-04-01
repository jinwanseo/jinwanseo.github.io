import { Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

interface RootProps {
  name: string;
  age: number;
}

function Root({ name, age }: RootProps) {
  return (
    <Stack>
      <Typography variant="subtitle1" color={blueGrey[700]}>
        AI BRAIN Client
      </Typography>
      <Outlet />
    </Stack>
  );
}

export default Root;
