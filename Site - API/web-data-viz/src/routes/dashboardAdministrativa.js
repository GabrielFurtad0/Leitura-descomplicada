var express = require("express");
var router = express.Router();
var dashboardAdministrativaController = require("../controllers/dashboardAdministrativaController")

//Recebendo os dados do html e direcionando para a função cadastrar de dashboardAdministrativaController.js
// Conta quantos formularios já foram enviados
router.get("/contarTotalEnvios/:idUsuario", function(req, res){
  dashboardAdministrativaController.contarTotalEnvios(req, res);
})

router.get("/listarPorUsuario/:idUsuario", function(req, res){
  dashboardAdministrativaController.listarPorUsuario(req, res);
})

router.get("/contarLivrosPorGenero/:idUsuario", function(req, res){
  dashboardAdministrativaController.contarLivrosPorGenero(req, res);
})

router.get("/obterGeneroPreferido/:idUsuario", function(req, res){
  dashboardAdministrativaController.obterGeneroPreferido(req, res);
})

module.exports = router;