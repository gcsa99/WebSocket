
//lista de usuarios ativos por documento
const conexoesDocumentos = [];
//Função que encontra uma conexão de um usuário em um documento

function encontrarConexao(nomeDocumento, nomeUsuario) {
  const teste = conexoesDocumentos.find((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento &&
      conexao.nomeUsuario === nomeUsuario
    );
  });
  return teste;
}
//Função que adiciona uma conexão de um usuário em um documento
function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}
//Função que retorna uma lista de usuários conectados em um documento
function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}
//Função que remove uma conexão de um usuário em um documento
function removerConexao(nomeDocumento, nomeUsuario) {
  const indice = conexoesDocumentos.findIndex((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento &&
      conexao.nomeUsuario === nomeUsuario
    );
  });
  //Se encontrar a conexão, remove ela da lista
  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  }
}

export {
  adicionarConexao,
  obterUsuariosDocumento,
  removerConexao,
  encontrarConexao,
};
