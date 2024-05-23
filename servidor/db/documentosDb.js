import { documentosColecao } from "./dbConnect.js";

//Busca os documentos na coleção
function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
}
//Adiciona um documento na coleção
function adicionarDocumento(nome) {
  const resultado = documentosColecao.insertOne({
    nome,
    texto: "",
  });

  return resultado;
}

//Busca de documento por nome
function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome,
  });

  return documento;
}
//Atualiza o texto do documento
function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne(
    {
      nome,
    },
    {
      $set: {
        texto,
      },
    }
  );

  return atualizacao;
}

function excluirDocumento(nome) {
  const resultado = documentosColecao.deleteOne({
    nome,
  });

  return resultado;
}

export {
  encontrarDocumento,
  atualizaDocumento,
  obterDocumentos,
  adicionarDocumento,
  excluirDocumento,
};
