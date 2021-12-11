const express = require("express");
require("dotenv").config();
const app = express();
const io = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const cors = require("cors");
const path = require('path');

// Globals
const PORT = Number(process.env.PORT || 3000);
const SOCK_PORT = Number(process.env.SOCK_PORT || 1234);

// Config for express app
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", async (req, res) => {
  //   res.send(`${new Date()} | Server running successfully!`);
  res.render("pages/index");
});
app.get("*", async (req, res) => {
  res.status(404).send("404 not found");
});

// Listener
try {
  //socket server
  const socket = io(SOCK_PORT, {
    cors: {
      origin: "*",
    },
  });
  socket.on("connection", (sockets) => {
    console.log(`user connected`);
    sockets.on("disconnect", () => {
      console.log(`user disconnected`);
    });
    sockets.on("toggle", (data) => {
      console.log(data);
    });
    sockets.on("slider", (data) => {
      console.log(data);
    });
  });

  //http server
  app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
  });
  //admin-ui
  instrument(socket, { auth: false });
} catch (err) {
  console.log(`Could not start the server, ${err}`);
}
