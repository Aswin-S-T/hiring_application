import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14 }}
        color="green"
        gutterBottom
        style={{ color: "green" }}
      >
        New
      </Typography>
      <Typography
        variant="h5"
        component="div"
        className="jobTitle"
        style={{ fontWeight: "bold" }}
      >
        MERN Stack Developer
      </Typography>
      <Typography
        sx={{ mb: 1.5 }}
        color="text.secondary"
        className="jobLocation"
        style={{ color: "#a920c3" }}
      >
        Banglore, Karnataka
      </Typography>
      <Typography variant="body2">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className="mt-2 cardBox">
        {card}
      </Card>
      <Card variant="outlined" className="mt-2 cardBox">
        {card}
      </Card>
      <Card variant="outlined" className="mt-2 cardBox">
        {card}
      </Card>
      <Card variant="outlined" className="mt-2 cardBox">
        {card}
      </Card>
    </Box>
  );
}
