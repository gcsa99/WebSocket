import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

function inserirLinkDocumento(nome) {
  listaDocumentos.innerHTML += `<a href="documento.html?nome=${nome}" id=${nome} class="list-group-item list-group-item-action">${nome}</a>`;
}
function removerLinkDocumento(nome) {
  const documento = document.getElementById(nome);
  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
