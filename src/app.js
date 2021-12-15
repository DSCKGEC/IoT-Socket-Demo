const express = require("express");
require("dotenv").config();
const app = express();
const socketio = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const cors = require("cors");
const path = require("path");
const homeController = require("./controllers/root.controller");

// Globals
const PORT = Number(process.env.PORT || 3000);
const SOCK_PORT = Number(process.env.SOCK_PORT || 2053);
let clients = []; //we aren't using any database, so storing the clients here

// Config for express app
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views")); //set path for the views
app.use(express.static(__dirname + "/views"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", homeController.RenderHome);
// 404 page
app.get("*", homeController.Render404);

// Listener
try {
  //http server
  const server = app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
    console.log(`Head on to: http://localhost:${PORT}`);
  });
  //socket server
  const io = socketio(server, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket) => {
    console.log(`User with id: ${socket.id} connected!`);
    clients.push(socket.id);  //add the id to the array
    socket.on("disconnect", () => {
      console.log(`User with id: ${socket.id} disconnected`);
      clients = clients.filter( val => { return val != socket.id });  //remove the id
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
