function definirCookie(chave, valor) {
  document.cookie = `${chave}=${valor};path=/`;
}

function obterCookie(token) {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${token}=`))
    ?.split("=")[1];
}

function removerCookie(cookie) {
  document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00`;
}

export { definirCookie, obterCookie, removerCookie };
