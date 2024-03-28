import {
  emitirExcluirDocumento,
  emitirTextoEditor,
  selecionarDocumento,
} from "./socket-front.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const tituloDocumento = document.getElementById("titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem título";
selecionarDocumento(nomeDocumento);

const textoEditor = document.getElementById("editor-texto");
textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor({ texto: textoEditor.value, nomeDocumento });
});

const botaoExcluir = document.getElementById("excluir-documento");
botaoExcluir.addEventListener("click", () => {
  emitirExcluirDocumento(nomeDocumento);
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

function avisoExclusao(nome) {
  if (nomeDocumento === nome) {
    alert(`Documento '${nome}' excluído!`);
    window.location.href = "/";
  }
}

export { atualizaTextoEditor, avisoExclusao };
