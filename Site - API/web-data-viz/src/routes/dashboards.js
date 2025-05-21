var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController")

//Recebendo os dados do html e direcionando para a função cadastrar de dashboardController.js
router.get("/contarLivrosPorUsuario/:idUsuario", function(req, res){
  dashboardController.contarLivrosPorUsuario(req, res);
})

router.get("/listarPorUsuario/:idUsuario", function(req, res){
  dashboardController.listarPorUsuario(req, res);
})

router.get("/contarLivrosPorGenero/:idUsuario", function(req, res){
  dashboardController.contarLivrosPorGenero(req, res);
})

router.get("/obterGeneroPreferido/:idUsuario", function(req, res){
  dashboardController.obterGeneroPreferido(req, res);
})

module.exports = router;