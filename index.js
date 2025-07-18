const express = require("express");
const port = process.env.PORT || 5550;
const cors = require("cors");
const { json } = require("express/lib/response");

const app = express();




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))




app.post("/", (req, res) => {
const data = req.body
 
  res.status(201).json({ data : req.body});
   const p = [].push(data)
   console.log(p);
});


app.get("/", (req, res) => {
  res.status(200).send(res.json());
});


app.listen(port, () => {
  console.log("serveur démarrée");
});
