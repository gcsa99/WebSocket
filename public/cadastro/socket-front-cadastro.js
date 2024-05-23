const socket = io();
function emitirCadastrarUsuario(dados) {
  socket.emit("cadastrar-usuario", dados);
}
socket.on("cadastro-sucesso", () => alert("Cadastro realizado com sucesso."));
socket.on("cadastro-erro", (erro) => {
  erro === null ? alert("Erro no cadastro.") : alert(erro);
});
export { emitirCadastrarUsuario };
