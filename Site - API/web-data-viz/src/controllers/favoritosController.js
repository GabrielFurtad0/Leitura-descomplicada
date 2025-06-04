var favoritosModel = require("../models/favoritosModel");

function enviar(req, res) {
    // Recuperando os valores do corpo da requisição
    var tituloParagrafo = req.body.tituloParagrafoServer;
    var imagemLivro = req.body.imagemLivroServer;
    var genero = req.body.generoServer;
    var descricao = req.body.descricaoServer;
    var tempoLeitura = req.body.tempoLeituraServer;
    var id = req.body.idServer;

    console.log("Dados recebidos:", {tituloParagrafo, imagemLivro, genero, descricao, tempoLeitura, id});

    // Validações dos valores
    if (id == null) {
        res.status(400).send("Você não está logado");
    } else {
        // Passando os valores para o model
        favoritosModel.enviar(tituloParagrafo, imagemLivro, genero, descricao, tempoLeitura, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    enviar
}