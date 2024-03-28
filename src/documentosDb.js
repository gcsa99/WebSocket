import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
}

function adicionarDocumento(nome) {
  const resultado = documentosColecao.insertOne({
    nome,
    texto: "",
  });
  return resultado;
}

//busca na lista pelo nome
function encontrarDocumento(nome) {
  // const documento = documentos.find((documento) => { return documento.nome === nome; })
  const documento = documentosColecao.findOne({
    // nome: nome
    nome,
  });
  return documento;
}

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne(
    { nome },
    { $set: { texto } }
  );
  return atualizacao;
}
function excluirDocumento(nome, texto) {
  const resultado = documentosColecao.deleteOne({ nome });
  return resultado;
}

export {
  encontrarDocumento,
  atualizaDocumento,
  obterDocumentos,
  adicionarDocumento,
  excluirDocumento,
};
