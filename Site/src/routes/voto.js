var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController");

//Recebendo os dados do html e direcionando para a função cadastrar de votoController.js
router.post("/cadastrar", function (req, res) {
    votoController.cadastrar(req, res);
})

module.exports = router;