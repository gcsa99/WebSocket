import { definirCookie } from "../utils/cookies.js";

// const socket = io("http://localhost:3000"); //Usado para simular erro de cors
const socket = io();
function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar-usuario", dados);
}
socket.on("autenticar-sucesso", (jwt) => {
  definirCookie("token", jwt);
  window.location.href = "/";
});
socket.on("autenticar-erro", (erro) => {
  erro === null ? alert("Erro ao autenticar.") : alert(erro);
});
export { emitirAutenticarUsuario };
