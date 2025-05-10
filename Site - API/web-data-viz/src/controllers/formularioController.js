var formularioModel = require("../models/formularioModel");

function enviar(req, res) {
    // Recuperando os valores do corpo da requisição
    let classeFormulario = req.body.classeFormularioServer;
    let titutlo = req.body.titutloServer;
    let mensagem = req.body.mensagemServer;
    let id = req.body.idServer;

    console.log("Dados recebidos:", {classeFormulario, titutlo, mensagem, id});

    // Validações dos valores
    if (classeFormulario == undefined) {
        res.status(400).send("Seu select está undefined!");
    } else if (titutlo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (mensagem == undefined) {
        res.status(400).send("Sua mensagem está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Sua id está undefined!");
    }
    else {
        // Passando os valores para o model
        formularioModel.enviar(classeFormulario, titutlo, mensagem, id)
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