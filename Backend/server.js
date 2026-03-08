const express = require("express");
const cors = require('cors')
const app = express();

app.use(express.json());

app.use(cors())

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Santhosh" },
    { id: 2, name: "Vignesh" }
  ];
  res.json(users);
});

app.post("/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received",
    data: data
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});