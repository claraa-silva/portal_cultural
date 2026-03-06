const express = require("express");
const app = express();
const cors = require("cors");
const porta = 8000;
const pool = require('./db');
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());

//rotas:
// /paises, /universidades, /planejamento, /bolsas, /experiencias, /perguntas, /guias

app.use("/paises", require("./routes/paises"))

app.get("/universidades", (req,res) => {
    res.send("Lista de universidades");
})

app.get("/bolsas", (req,res) => {
    res.send("Lista de bolsas disponíveis para universidades de cada país");
})

app.get("/perguntas", (req,res) => {
    res.send("Perguntas como: precisa de visto? precisa falar espanhol? posso trabalhar? como encontrar moradia?")
})

app.get("/experiencias", (req,res) => {
    res.send("Experiências de pessoas e alunos")
})

app.get("/guia", (req,res) => {
    res.send("Guia para estudantes")
})

app.get

app.listen(porta, () => { console.log(`servidor na porta ${porta}`) });