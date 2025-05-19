var express = require("express");
var router = express.Router();

var favoritosController = require("../controllers/favoritosController");

//Recebendo os dados do html e direcionando para a função enviar de favoritosController.js
router.post("/enviar", function (req, res) {
    favoritosController.enviar(req, res);
})

router.post("/puxar", function (req, res) {
    favoritosController.puxar(req, res);
});

module.exports = router;