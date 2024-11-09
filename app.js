const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app1 = express();
const app2 = express();
const app3 = express();

// socket server
const server = createServer(app3);
const io = new Server(server);

const port1 = 3001;
const port2 = 3002;
const port3 = 3003;

// Define the path to your static files
const staticStoragePath = path.join(__dirname, "storage");
const staticWebsocketPath = path.join(__dirname, "websocket");

// Use express.static middleware for both apps
app1.use(express.static(staticStoragePath));
app2.use(express.static(staticStoragePath));
app3.use(express.static(staticWebsocketPath));

// App 1
app1.get("/", (_req, res) => {
  res.sendFile(staticStoragePath + "/index1.html");
});

app1.listen(port1, () => {
  console.log(`App is listening to the port ${port1}`);
});

// App 2
app2.get("/", (_req, res) => {
  res.sendFile(staticStoragePath + "/index2.html");
});

app2.listen(port2, () => {
  console.log(`App is listening to the port ${port2}`);
});

// App 3 Websockets
app3.get("/", (_req, res) => {
  res.sendFile(staticWebsocketPath + "/index.html");
});

server.listen(port3, () => {
  console.log(`App is listening to the port ${port3}`);
});

// websockets connection
io.on("connection", (socket) => {
  console.log("connection established");

  socket.on("chat message", (msg) => {
    console.log("message received to server:", msg);
    io.emit("chat message", msg);
  });
});
