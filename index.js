const express = require("express");
const port = process.env.PORT || 5550;
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const stockage = [
  {
    data: "",
  },
];

app.post("/", (req, res) => {
  const data = req.body;

  res.status(201).json({ data: req.body });
  localStorage.setItem("data", data);
});

app.get("/", (req, res) => {
  res.status(200).send(res.json());
});

app.listen(port, () => {
  console.log(`serveur démarrée sur le port ${port} `);
});
