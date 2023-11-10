const express = require("express");
const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("auth router called");
});

module.exports = authRouter;
