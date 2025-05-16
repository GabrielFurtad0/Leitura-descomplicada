var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

//Recebendo os dados do html e direcionando para a função enviar de questionarioController.js
router.post("/enviar", function (req, res) {
    questionarioController.enviar(req, res);
})

module.exports = router;