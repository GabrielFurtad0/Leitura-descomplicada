var formularioModel = require("../models/formularioModel");

function enviar(req, res) {
    // Recuperando os valores do corpo da requisição
    let classeFormulario = req.body.classeFormularioServer;
    let titulo = req.body.tituloServer;
    let mensagem = req.body.mensagemServer;
    let fkUsuario = req.body.idServer;

    console.log("Dados recebidos:", {classeFormulario, titulo, mensagem, fkUsuario});

    // Validações dos valores
    if (classeFormulario == undefined) {
        res.status(400).send("Seu select está undefined!");
    } else if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (mensagem == undefined) {
        res.status(400).send("Sua mensagem está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua id está undefined!");
    }
    else {
        // Passando os valores para o model
        formularioModel.enviar(classeFormulario, titulo, mensagem, fkUsuario)
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