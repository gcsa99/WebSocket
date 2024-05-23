import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";
import "dotenv/config";
import io from "./servidor.js";

//crio um namespace para diferenciar quem estiver conectado em cada local no ws
const nspUsuarios = io.of("/usuarios");
nspUsuarios.use(autorizarUsuario);
nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);
});

//não preciso validar quem estiver no login/cadastro
io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
