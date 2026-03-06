const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Lista de países disponíveis");
});

router.get("/argentina", (req, res) => {
  res.send("Informações sobre estudar na Argentina");
});

router.get("/uruguai", (req, res) => {
  res.send("Informações sobre estudar no Uruguai");
});

router.get("/paraguai", (req, res) => {
  res.send("Informações sobre estudar no Paraguai");
});

router.get("/bolivia", (req, res) => {
  res.send("Informações sobre estudar na Bolívia");
});

router.get("/peru", (req, res) => {
  res.send("Informações sobre estudar no Peru");
});

router.get("/colombia", (req, res) => {
  res.send("Informações sobre estudar na Colômbia");
});

router.get("/venezuela", (req, res) => {
  res.send("Informações sobre estudar na Venezuela");
});

module.exports = router;