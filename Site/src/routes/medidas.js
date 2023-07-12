var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/obterOsMaiores", function (req, res) {
    medidaController.obterOsMaiores(req, res);
});

// router.get("/obterOsAposentados", function (req, res) {
//     medidaController.obterOsAposentados(req, res);
// });

// router.get("/obterOsBrasileiros", function (req, res) {
//     medidaController.obterOsBrasileiros(req, res);
// });

module.exports = router;