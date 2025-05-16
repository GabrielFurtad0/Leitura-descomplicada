var questionarioModel = require("../models/questionarioModel");

function enviar(req, res) {
    // Recuperando os valores do corpo da requisição
    let genero1 = req.body.genero1Server;
    let genero2 = req.body.genero2Server;
    let fkUsuario = req.body.idServer;

    console.log("Dados recebidos:", {genero1, genero2, fkUsuario});

    // Validações dos valores
    if (genero1 == undefined) {
        res.status(400).send("Seu select está undefined!");
    } else if (genero2 == undefined) {
        res.status(400).send("Seu genero2 está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua id está undefined!");
    }
    else {
        // Passando os valores para o model
        questionarioModel.enviar(genero1, genero2, fkUsuario)
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