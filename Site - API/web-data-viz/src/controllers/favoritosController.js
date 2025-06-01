var favoritosModel = require("../models/favoritosModel");

function puxar(req, res) {
    var tituloParagrafo = req.body.tituloParagrafoServer;
    var imagemLivro = req.body.imagemLivroServer;
    var genero = req.body.generoServer;
    var descricao = req.body.descricaoServer;
    var tempoLeitura = req.body.tempoLeituraServer;
    var id = req.body.idServer;
    
        favoritosModel.puxar(tituloParagrafo, imagemLivro, genero, descricao, tempoLeitura, id)
            .then(
                function (resultadoPuxar) {
                    console.log(`\nResultados encontrados: ${resultadoPuxar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoPuxar)}`);

                    if (resultadoPuxar.length == 1) {
                        console.log(resultadoPuxar);
                        res.json({
                            id: resultadoPuxar[0].id,
                            tituloParagrafo: resultadoPuxar[0].tituloParagrafo

                        });
                    } else if (resultadoPuxar.length == 0) {
                        res.status(403).send("Livro inválido");
                    } else {
                        res.status(403).send("Mais de um livro com o mesmo nome");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


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
    puxar,
    enviar
}