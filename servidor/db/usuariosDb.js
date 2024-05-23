import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

// Função para cadastrar um usuário no banco de dados
// Recebe um objeto com as propriedades nome e senha
// Retorna uma Promise que resolve com o resultado da inserção
// no banco de dados
// ou rejeita com um erro

//Sistema utiliza hash e sal para armazenar a senha do usuário
function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
}
function encontrarUsuario(nome) {
  return usuariosColecao.findOne({ nome });
}

export { cadastrarUsuario, encontrarUsuario };
