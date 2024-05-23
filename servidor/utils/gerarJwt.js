import jwt from "jsonwebtoken";

// Função que gera um token jwt
// Recebe um objeto com as informações que serão armazenadas no token
// Retorna um token jwt
function gerarJwt(payload) {
  const tokenJwt = jwt.sign(payload, process.env.SECRETJWT, {
    expiresIn: "1h",
  });
  return tokenJwt;
}
export default gerarJwt;
