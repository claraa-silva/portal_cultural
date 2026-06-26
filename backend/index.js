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

//GET /paises -> Retorna dados sobre os paises
app.get("/paises", async (req,res) => {
    try{
        const resultado = await pool.execute("SELECT * FROM pais");
        console.log(resultado);
        res.status(200).json(resultado[0]);
    }catch(err){
        res.status(500).send(err)
    }
})
app.get("/paises/:id", async (req,res) => {
    try{

        const resultado = await pool.execute(
            "SELECT * FROM pais WHERE id=?",
            [req.params.id]
        );

        res.status(200).json(resultado[0][0]);

    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})


app.get("/universidades/:idpais", async (req,res) => {
    try {
        const idpais = req.params.idpais
        const resultado = await pool.execute("SELECT * FROM universidades WHERE id_pais = ?", [idpais]);
        console.log(resultado)
        res.status(200).json(resultado[0])
    } catch (error) {
        console.error(`erro: ${error}`)
    }
})

app.get("/intercambios", async (req,res) => {
    try{
        const resultado = await pool.execute("SELECT * FROM intercambios");
        console.log(resultado);
        res.status(200).json(resultado[0]);
    }catch(err){
        res.status(500).send(err)
    }
})

app.get("/intercambios/:id", async (req, res) => {
    try {
        const [rows] = await pool.execute(
            "SELECT * FROM intercambios WHERE pais_id = ?",
            [req.params.id]
        );

        res.status(200).json(rows); // 👈 SEMPRE ARRAY
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});


app.get("/perguntas", (req,res) => {
    res.send("Perguntas como: precisa de visto? precisa falar espanhol? posso trabalhar? como encontrar moradia?")
})

app.get("/experiencias/:idpais", async (req,res) => {
    try{
        const idpais = req.params.idpais
        const result = await pool.query(`select * from experiencias where id_pais = ${idpais}`)
        console.log(result)
        res.status(200).json(result[0]); 
    }catch(error){
        console.error(`erro: ${error}`)
    }
})

app.post("/experiencias/:idpais", async (req,res) => {
    try{
        const sql = `insert into experiencias (id_pais, data, texto) values (?,?,?)`;
        const valores = [req.params.idpais, getDataFormatada(), req.body.texto]
        const resultado =  await pool.execute(sql,valores);
        res.status(200).send(resultado[0]);
    } catch(error){
        console.error(`Erro: ${error}`);
    }
})

app.get("/guia", async (req,res) => {
    res.send("Guia para estudantes")
})

app.get("/destinos/:iddestino", async (req, res) => {
    res.send("destinos incriveis!")
})

function getDataFormatada(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate
}

app.listen(porta, () => { console.log(`servidor na porta ${porta}`) });