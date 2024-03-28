import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.DBSTRING);
let documentosColecao;
try {
  await client.connect();
  const db = client.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}
export { documentosColecao };
