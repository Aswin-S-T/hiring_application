import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableLinkChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Node js" component="a" href="#basic-chip" clickable />
      <Chip label="React js" component="a" href="#basic-chip" clickable />
      <Chip label="Mongodb" component="a" href="#basic-chip" clickable />
      <Chip label="Php" component="a" href="#basic-chip" clickable />
    </Stack>
  );
}
