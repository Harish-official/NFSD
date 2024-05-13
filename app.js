const express = require("express");
const path = require("path");

const app1 = express();
const app2 = express();

const port1 = 3001;
const port2 = 3002;

// Define the path to your static files
const staticPath = path.join(__dirname, "storage");

// Use express.static middleware for both apps
app1.use(express.static(staticPath));
app2.use(express.static(staticPath));

// App 1
app1.get("/", (_req, res) => {
  res.sendFile(staticPath + "/index1.html");
});

app1.listen(port1, () => {
  console.log(`App is listening to the port ${port1}`);
});

// App 2
app2.get("/", (_req, res) => {
  res.sendFile(staticPath + "/index2.html");
});

app2.listen(port2, () => {
  console.log(`App is listening to the port ${port2}`);
});
