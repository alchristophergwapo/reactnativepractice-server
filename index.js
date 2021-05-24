const express = require("express");
const authMiddleware = require("./firebase/auth-middleware");

const app = express();

app.use("/", authMiddleware);

app.use("/", (req, res) => {
  res.send("This is a server response.");
});

app.listen(4000, () => console.log("The server is running at PORT 4000"));
