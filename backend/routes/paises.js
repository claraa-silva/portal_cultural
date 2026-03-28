const pool = require('../db');
const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Lista de países disponíveis");
// });

// router.get("/argentina", (req, res) => {
//   res.send("Informações sobre estudar na Argentina");
// });

// router.get("/uruguai", (req, res) => {
//   res.send("Informações sobre estudar no Uruguai");
// });

// router.get("/paraguai", (req, res) => {
//   res.send("Informações sobre estudar no Paraguai");
// });

// router.get("/bolivia", (req, res) => {
//   res.send("Informações sobre estudar na Bolívia");
// });

// router.get("/peru", (req, res) => {
//   res.send("Informações sobre estudar no Peru");
// });

// router.get("/colombia", (req, res) => {
//   res.send("Informações sobre estudar na Colômbia");
// });

// router.get("/venezuela", (req, res) => {
//   res.send("Informações sobre estudar na Venezuela");
// });


router.get("/:idPais", async (req, res) => {
  try {
    const idPais = req.params.idPais;
    
    const resultado = await pool.execute(
      "SELECT * FROM pais WHERE id = ?",
      [idPais]
    );
    
    if (resultado[0].length === 0) {
      return res.status(404).json({ erro: "País não encontrado" });
    }
    
    res.json(resultado[0][0]);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ erro: "Erro no servidor" });
  }
});

module.exports = router;