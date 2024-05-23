import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticaUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";


//Função que registra os eventos de login
//Ouve um evento emitido pelo ws e verifica se o usuario existe
//Se existir, verifica se a senha está correta
//Se estiver, emite um token jwt para o cliente
//Se não estiver, emite um erro
//Se o usuário não existir, emite um erro

function registrarEventosLogin(socket, io) {
  socket.on("autenticar-usuario", async ({ nome, senha }) => {
    const usuario = await encontrarUsuario(nome);
    if (usuario) {
      const autenticado = autenticarUsuario(senha, usuario);
      if (autenticado) {
        const tokenJwt = gerarJwt({ nome });
        socket.emit("autenticar-sucesso", tokenJwt);
      } else {
        socket.emit("autenticar-erro", "Usuário ou senha incorretos.");
      }
    } else {
      socket.emit("autenticar-erro", "Usuário não encontrado.");
    }
  });
}
export default registrarEventosLogin;
