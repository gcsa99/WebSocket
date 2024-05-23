# Projeto EditDocs

O EditDocs é um editor de documentos online desenvolvido como parte de um curso de WebSockets. O projeto permite que múltiplos usuários colaborem em tempo real em documentos compartilhados.

Para controle dos eventos de emissão e recepção de dados pelo Socket.IO, são utilizados middlewares. Além disso, o projeto implementa funcionalidades de cadastro, login e controle de acesso utilizando JSON Web Tokens (JWT) para garantir a segurança dos dados e a autenticação dos usuários. Outras funcionalidades incluem acesso a diversos documentos e listagem de usuários online em um mesmo documento.

## Funcionalidades

- Colaboração em tempo real em documentos compartilhados
- Cadastro de usuários com senhas criptografadas
- Login de usuários e geração de JWT no servidor
- Armazenamento de JWT nos cookies do front-end
- Controle de acesso utilizando middlewares do Socket.IO
- Acesso a diversos documentos
- Listagem de usuários online em um mesmo documento

## Tecnologias e Ferramentas Utilizadas

### Backend

- Node.js
- Socket.IO

### Frontend

- HTML
- CSS
- JavaScript

### Autenticação e Segurança

- JSON Web Tokens (JWT)
- Criptografia de senhas

### Banco de Dados

- MongoDB

## Como Executar o Projeto

1. Clone este repositório:
   git clone https://github.com/gcsa99/WebSocket.git
2. Navegue até o diretório do projeto:
   cd WebSocket
3. Instale as dependências:
   npm install
4. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto e preenchendo com as suas configurações.
   Exemplo:
   PORT=3000
   DBSTRING=mongodb://**_SUAURL_**
   JWT_SECRET=sua_chave_secreta
5. Inicie o servidor:
   npm run dev
6. Acesse a aplicação no seu navegador em `http://localhost:3000`.
