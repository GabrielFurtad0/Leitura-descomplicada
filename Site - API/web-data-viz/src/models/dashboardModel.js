var database = require("../database/config")

function contarLivrosPorUsuario(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
    var instrucaoSql = `
        SELECT COUNT(*) as totalLivros FROM lista WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para exibir na Lista do usuario
function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT nome, img, genero, descricao FROM lista WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para contar livros por gênero de um usuário (para o gráfico)
function contarLivrosPorGenero(idUsuario) {
    var instrucaoSql = `
        SELECT genero, COUNT(*) as quantidade 
        FROM lista 
        WHERE fkUsuario = ${idUsuario} 
        GROUP BY genero 
        ORDER BY quantidade DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para obter o gênero mais frequente na lista do usuário
function obterGeneroPreferido(idUsuario) {
    var instrucaoSql = `
        SELECT genero, COUNT(*) as quantidade 
        FROM lista 
        WHERE fkUsuario = ${idUsuario} 
        GROUP BY genero 
        ORDER BY quantidade DESC 
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function removerLivroDaLista(idUsuario, nomeLivro){
    const instrucaoSql = `
    delete from lista
    where nome = "${nomeLivro}"
    and fkUsuario = "${idUsuario}"
    ;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function obterTempoLeitura(idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
        var instrucaoSql = `
            SELECT tempoLeitura 
            FROM lista WHERE fkUsuario = ${idUsuario}
            order by tempoLeitura desc;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
    contarLivrosPorUsuario,
    listarPorUsuario,
    contarLivrosPorGenero,
    obterGeneroPreferido,
    removerLivroDaLista,
    obterTempoLeitura,
};