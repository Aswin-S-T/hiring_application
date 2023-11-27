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

export default function OutlinedCard({ data }) {
  const gotoJobDetailsPage = (jobId) => {
    window.location.href = `/job/${jobId}`;
  };

  return (
    <Box sx={{ minWidth: 275}} >
      {data &&
        data.length > 0 &&
        data.map((job) => (
          <Card variant="outlined" className="mt-2 cardBox w-100">
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
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => gotoJobDetailsPage(job?._id)}
                >
                  {job?.jobTitle}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  className="jobLocation"
                  style={{ color: "#a920c3" }}
                >
                  {job?.location}
                </Typography>
                <Typography variant="body2">
                  {job?.description}
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => gotoJobDetailsPage(job?._id)}
                >
                  View More
                </Button>
              </CardActions>
            </React.Fragment>
          </Card>
        ))}
    </Box>
  );
}
