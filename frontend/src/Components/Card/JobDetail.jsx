import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function JobDetail() {
  return (
    <div className="mt-5">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="green" gutterBottom>
            New
          </Typography>
          <Typography variant="h5" component="div">
            MERN Stack Developer
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Urgent Hiring
          </Typography>
          <Typography variant="body2">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <br />
          <div>
            <h4>Skills Required</h4>
            <div className="mt-4">
              <Stack direction="row" spacing={1}>
                <Chip label="Chip Filled" />
                <Chip label="Chip Outlined" variant="outlined" />
              </Stack>
            </div>
          </div>
          <div className="mt-3">
            <button className="loginBtn">Login to Apply</button>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
