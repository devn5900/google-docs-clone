const { io } = require("socket.io");
const express = require("express");
const app = express();
const cors = require("cors");
const { documentRouter } = require("../router/document.router");
const { connection } = require("../connection/db.con");
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use("/api/document", documentRouter);

app.listen(port, () => {
  console.log("server is running", port);
  connection();
});
