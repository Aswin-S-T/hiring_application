const express = require("express");
const authRouter = express.Router();

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID);

authRouter.get("/", (req, res) => {
  res.send("auth router called");
});

authRouter.post("/google-login", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  console.log("TICKET=======================", ticket?.getPayload);
  // upsert(users, { name, email, picture });
  // res.status(201);
  // res.json({ name, email, picture });
});

module.exports = authRouter;
