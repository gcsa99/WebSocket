import { atualizaTextoEditor, avisoExclusao } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome, (texto) => {
    //callback executado no front => reconhecimentos do socket.io
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

// socket.on("texto_documento", (texto) => {
//   atualizaTextoEditor(texto);
// });

socket.on("texto_editor", (texto) => {
  atualizaTextoEditor(texto);
});
socket.on("excluir_documento_sucesso", (nome) => {
  avisoExclusao(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
