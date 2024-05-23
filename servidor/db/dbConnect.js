import { MongoClient } from "mongodb";
import "dotenv/config";

//adicionado a partir do arquivo .env
const cliente = new MongoClient(process.env.DBSTRING);

//coleções criadas no mongoDB
let documentosColecao, usuariosColecao;

try {
  await cliente.connect();
  
  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
