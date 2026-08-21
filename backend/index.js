const express = require("express");
const app = express();
const cors = require("cors");
const porta = 8000;
const pool = require('./db');
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());

// GET /paises -> Retorna dados sobre todos os países
app.get("/paises", async (req, res) => {
    try {
        const resultado = await pool.execute("SELECT * FROM pais");
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// GET /paises/:id -> Retorna um país específico
app.get("/paises/:id", async (req, res) => {
    try {
        const resultado = await pool.execute(
            "SELECT * FROM pais WHERE id = ?",
            [req.params.id]
        );
        res.status(200).json(resultado[0][0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// ===================== UNIVERSIDADES =====================
 
app.get("/universidades/:idpais", async (req, res) => {
    try {
        const idpais = req.params.idpais;
        const resultado = await pool.execute(
            "SELECT * FROM universidades WHERE id_pais = ?",
            [idpais]
        );
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// ===================== INTERCAMBIOS =====================
 
app.get("/intercambios", async (req, res) => {
    try {
        const resultado = await pool.execute("SELECT * FROM intercambios");
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// Retorna intercâmbios de um país específico
app.get("/intercambios/:id", async (req, res) => {
    try {
        const [rows] = await pool.execute(
            "SELECT * FROM intercambios WHERE pais_id = ?",
            [req.params.id]
        );
        res.status(200).json(rows); // sempre array
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// ===================== DESTINOS =====================
// Antes: só existia "/destinos/:iddestino" devolvendo um texto fixo.
// Agora busca de verdade no banco, trazendo nome do país via JOIN.
 
// GET /destinos -> lista todos os destinos
app.get("/destinos", async (req, res) => {
    try {
        const resultado = await pool.execute(
            `SELECT destinos.id, destinos.nome, destinos.url_imagem, destinos.descricao,
                    pais.id AS pais_id, pais.nome AS pais
             FROM destinos
             JOIN pais ON destinos.id_pais = pais.id`
        );
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// GET /destinos/:id -> retorna um destino específico
app.get("/destinos/:id", async (req, res) => {
    try {
        const resultado = await pool.execute(
            `SELECT destinos.id, destinos.nome, destinos.url_imagem, destinos.descricao,
                    pais.id AS pais_id, pais.nome AS pais
             FROM destinos
             JOIN pais ON destinos.id_pais = pais.id
             WHERE destinos.id = ?`,
            [req.params.id]
        );
        res.status(200).json(resultado[0][0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// ===================== EVENTOS =====================
// Antes: só existia "/eventos/:id" e com bug (coluna "eventos_id" não existe,
// a coluna certa é "id"). Também faltava a rota de listagem "/eventos".
 
// GET /eventos -> lista todos os eventos
app.get("/eventos", async (req, res) => {
    try {
        const resultado = await pool.execute("SELECT * FROM eventos");
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// GET /eventos/:id -> retorna um evento específico
app.get("/eventos/:id", async (req, res) => {
    try {
        const [rows] = await pool.execute(
            "SELECT * FROM eventos WHERE id = ?", // corrigido: era "eventos_id"
            [req.params.id]
        );
        res.status(200).json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
 
// ===================== EXPRESSOES IDIOMATICAS =====================
 
app.get("/expressoes", async (req, res) => {
    try {
        const resultado = await pool.execute("SELECT * FROM expressoes_idiomaticas");
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message }); // corrigido: era .sent(err)
    }
});
 
// ===================== DICAS =====================
 
app.get("/dicas/:id", async (req, res) => {
    try {
        const resultado = await pool.execute(
            "SELECT * FROM dicas WHERE id_pais = ?", // corrigido: era "id" (coluna errada para filtrar por país)
            [req.params.id]
        );
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message }); // corrigido: era .sent(err)
    }
});
 
// ===================== PERGUNTAS / GUIA =====================
 
app.get("/perguntas", (req, res) => {
    res.send("Perguntas como: precisa de visto? precisa falar espanhol? posso trabalhar? como encontrar moradia?");
});
 
app.get("/guia", (req, res) => {
    res.send("Guia para estudantes");
});
 
// ===================== EXPERIENCIAS =====================

app.get("/experiencias", async (req, res) => {
    try {
        const [resultado] = await pool.execute(
            "SELECT * FROM experiencias"
        );

        res.status(200).json(resultado);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.get("/experiencias/:idpais", async (req, res) => {
    try {
        const idpais = req.params.idpais;
        // corrigido: usava pool.query com template literal (risco de SQL injection).
        // agora usa pool.execute com placeholder.
        const resultado = await pool.execute(
            "SELECT * FROM experiencias WHERE id_pais = ?",
            [idpais]
        );
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message }); // corrigido: faltava resposta de erro
    }
});
 
app.post("/experiencias/:idpais", async (req, res) => {
    try {
        console.log("PARAM ID:", req.params.idpais);
        console.log("BODY RECEBIDO:", req.body);

        const sql = "INSERT INTO experiencias (id_pais, data, titulo, texto, nome) VALUES (?, ?, ?, ?, ?)";
        const valores = [req.params.idpais, getDataFormatada(), req.body.titulo, req.body.texto, req.body.nome];
        const resultado = await pool.execute(sql, valores);
        res.status(200).json(resultado[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message }); // corrigido: faltava resposta de erro
    }
});
 
function getDataFormatada() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
 
app.listen(porta, () => { console.log(`servidor na porta ${porta}`) });