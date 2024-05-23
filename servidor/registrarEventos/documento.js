import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";
import {
  adicionarConexao,
  encontrarConexao,
  obterUsuariosDocumento,
  removerConexao,
} from "../utils/conexoesDocumentos.js";

//Função que registra os eventos de documento
//Ouve um evento emitido pelo ws e verifica se o documento existe
//Se existir, verifica se aquele usuario já esta conectado naquele documento
//Se não estiver, adiciona o usuario na lista de conexões

function registrarEventosDocumento(socket, io) {
  socket.on(
    "selecionar_documento",
    async ({ nomeDocumento, nomeUsuario }, devolverTexto) => {
      const documento = await encontrarDocumento(nomeDocumento);

      if (documento) {
        const conexaoEncontrada = encontrarConexao(nomeDocumento, nomeUsuario);

        if (!conexaoEncontrada) {
          socket.join(nomeDocumento);
          adicionarConexao({ nomeDocumento, nomeUsuario });
          socket.data = {
            usuarioEntrou: true,
          };
          //retorna todos usuarios conectados no documento
          const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);
          //atualiza a interface com os usuarios conectados
          io.to(nomeDocumento).emit("usuarios-documento", usuariosNoDocumento);
          //devolve o texto do documento
          devolverTexto(documento.texto);
        } else {
          //Não permite usuario entrar no documento se ja estiver conectado em outra aba
          socket.emit("usuario-ja-no-documento");
        }
      }
      socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);

        if (atualizacao.modifiedCount) {
          socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }
      });

      socket.on("excluir_documento", async (nome) => {
        const resultado = await excluirDocumento(nome);

        if (resultado.deletedCount) {
          io.emit("excluir_documento_sucesso", nome);
        }
      });
      //Quando um usuario sai de um documento, removo a conexão dele da lista daquele documento
      socket.on("disconnect", () => {
        if (socket.data.usuarioEntrou) {
          removerConexao(nomeDocumento, nomeUsuario);

          const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);
          io.to(nomeDocumento).emit("usuarios-documento", usuariosNoDocumento);
          devolverTexto(documento.texto);
        }
      });
    }
  );
}

export default registrarEventosDocumento;
