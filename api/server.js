const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<p>Server is running</p>");
});

server.get("/api/cars", (req, res) => {
  db("cars")
    .select("*")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Error with getting cars." });
    });
});

server.post("/api/cars", (req, res) => {
  db("cars")
    .insert(req.body, "id")
    .then((response) => {
      db("cars")
        .where({ id: response[0] })
        .then((response) => {
          res.status(201).json(response);
        });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: "Error with creating car." });
    });
});

module.exports = server;
