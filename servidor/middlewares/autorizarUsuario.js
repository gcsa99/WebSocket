import jwt from "jsonwebtoken";

// Função que verifica se o token enviado pelo cliente é válido
function autorizarUsuario(socket, next) {
  const token = socket.handshake.auth.token;
  try {
    const payload = jwt.verify(token, process.env.SECRETJWT);
    socket.emit("autorizacao_sucesso", payload);
    next();
  } catch (erro) {
    next(erro);
  }
}

export default autorizarUsuario;
