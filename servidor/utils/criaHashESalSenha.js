import { randomBytes, scryptSync } from "crypto";
//Cria um hash e um sal para uma senha.
//Retorna um objeto com as propriedades hashSenha e salSenha
function criaHashESalSenha(senha) {
  const salSenha = randomBytes(16).toString("hex");

  const hashSenha = scryptSync(senha, salSenha, 64).toString("hex");

  return { salSenha, hashSenha };
}
export default criaHashESalSenha;
