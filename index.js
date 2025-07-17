const express = require("express");
const port = process.env.PORT || 5550;
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("salut");
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(201).json({ message: "Données bien reçues", data });
});

app.listen(port, () => {
  console.log("serveur démarrée");
});
