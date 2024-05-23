import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

//Função que registra os eventos de cadastro de usuário
//Ouve um evento emitido pelo ws e verifica se o usuario ja existe
//Se não existir, cadastra o usuário no banco de dados
//Emite um evento de cadastro com sucesso ou erro

function registrarEventosCadastro(socket, io) {
  socket.on("cadastrar-usuario", async (dados) => {
    const usuario = await encontrarUsuario(dados.nome);
    if (usuario === null) {
      const resultado = await cadastrarUsuario(dados);
      if (resultado.acknowledged) {
        socket.emit("cadastro-sucesso");
      } else {
        socket.emit("cadastro-erro", null);
      }
    } else {
      socket.emit("cadastro-erro", "Usuário já existe no sistema");
    }
  });
}

export default registrarEventosCadastro;
