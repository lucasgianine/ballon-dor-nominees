var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// router.get("/", function (req, res) {
//     usuarioController.testar(req, res);
// });

// router.get("/listar", function (req, res) {
//     usuarioController.listar(req, res);
// });

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// POST
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/obterPlacar", function (req, res) {
    usuarioController.obterPlacar(req, res);
});

// GET
router.get("/obterPontos", function (req, res) {
    usuarioController.obterPontos(req, res);
});

router.get("/obterTotal", function (req, res) {
    usuarioController.obterTotal(req, res);
});

// PUT
// router.put("/update", function (req, res) {
//     usuarioController.update(req, res);
// });

// DELETE

module.exports = router;