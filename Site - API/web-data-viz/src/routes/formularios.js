var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

//Recebendo os dados do html e direcionando para a função enviar de formularioController.js
router.post("/enviar", function (req, res) {
    formularioController.enviar(req, res);
})

module.exports = router;