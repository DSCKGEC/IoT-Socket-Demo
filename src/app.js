const express = require("express");
require("dotenv").config();
const app = express();
const socketio = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const cors = require("cors");
const path = require("path");

// Globals
const PORT = Number(process.env.PORT || 3000);
const SOCK_PORT = Number(process.env.SOCK_PORT || 1234);

// Config for express app
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views")); //set path for the views
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", async (req, res) => {
  //   res.send(`${new Date()} | Server running successfully!`);
  res.render("pages/index");
});
// 404 page
app.get("*", async (req, res) => {
  res.status(404).send("404 not found");
});

// Listener
try {
  //http server
  app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
  });
  //socket server
  const io = socketio(SOCK_PORT, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket) => {
    console.log(`User with id: ${socket.id} connected!`);
    socket.on("disconnect", () => {
      console.log(`User with id: ${socket.id} disconnected`);
    });
    socket.on("toggle", (data) => {
      console.log(data);
      socket.broadcast.emit("toggle", data);
    });
    socket.on("slider", (data) => {
      console.log(data);
      socket.broadcast.emit("slider", data);
    });
    // var i = false;
    // setInterval(()=>{
    //   i = !i;
    //   console.log(i);
    //   socket.emit("toggle", i);
    // }, 200);
  });


  //admin-ui
  instrument(io, { auth: false });
} catch (err) {
  console.log(`Could not start the server, ${err}`);
}
