const express = require("express");
const app = express();
const cors = require("cors");
const porta = 8000;
const pool = require('./db');
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());





app.listen(porta, () => { console.log(`servidor na porta ${porta}`) });