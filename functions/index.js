const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({origin: true}));

app.get("/hello", (req, res)=>{
  res.status(200).send("Hello world");
})

exports.api = functions.https.onRequest(app);
