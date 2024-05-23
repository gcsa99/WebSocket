import { scryptSync, timingSafeEqual } from "crypto";

//Autentica um usuário comparando a senha fornecida com o hash de senha armazenado.
function autenticarUsuario(senha, usuario) {
  const hashTeste = scryptSync(senha, usuario.salSenha, 64);
  const hashBanco = Buffer.from(usuario.hashSenha, "hex");
  const autenticado = timingSafeEqual(hashTeste, hashBanco);

  return autenticado;
}

export default autenticarUsuario;
