const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const candidateRouter = require("./routes/candidates/routes");
const companyRouter = require("./routes/company/routes");
const adminRouter = require("./routes/admin/routes");
const authRouter = require("./routes/auth/routes");
const db = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// Database configuration
db.connect();

app.use("/api/candidate", candidateRouter);
app.use("/api/company", companyRouter);
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Nodejs app started.....");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
