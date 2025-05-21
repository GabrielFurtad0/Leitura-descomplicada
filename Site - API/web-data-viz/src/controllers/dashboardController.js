var dashboardModel = require("../models/dashboardModel");

function contarLivrosPorUsuario(req, res){
  const idUsuario = req.params.idUsuario;
  
  // Validação do parâmetro
  if (idUsuario == undefined) {
    res.status(400).send("ID do usuário está undefined!");
    return;
  }
  
  dashboardModel.contarLivrosPorUsuario(idUsuario)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        // Opção 1: Status 204 sem corpo
        res.status(204).end();
      
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao contar os livros: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}


// Função para exibir na Lista do usuario
function listarPorUsuario(req,res){
 const idUsuario = req.params.idUsuario;
  
  // Validação do parâmetro
  if (idUsuario == undefined) {
    res.status(400).send("ID do usuário está undefined!");
    return;
  }
  
  dashboardModel.listarPorUsuario(idUsuario)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        // Opção 1: Status 204 sem corpo
        res.status(204).end();
      
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao contar os livros: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function contarLivrosPorGenero(req,res){
const idUsuario = req.params.idUsuario;
  
  // Validação do parâmetro
  if (idUsuario == undefined) {
    res.status(400).send("ID do usuário está undefined!");
    return;
  }
  
  dashboardModel.contarLivrosPorGenero(idUsuario)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        // Opção 1: Status 204 sem corpo
        res.status(204).end();
      
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao contar os livros: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function obterGeneroPreferido(req,res){
const idUsuario = req.params.idUsuario;
  
  // Validação do parâmetro
  if (idUsuario == undefined) {
    res.status(400).send("ID do usuário está undefined!");
    return;
  }
  
  dashboardModel.obterGeneroPreferido(idUsuario)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        // Opção 1: Status 204 sem corpo
        res.status(204).end();
      
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao contar os livros: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  contarLivrosPorUsuario,
  listarPorUsuario,
  contarLivrosPorGenero,
  obterGeneroPreferido,
}