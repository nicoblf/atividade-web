// Hello-Flask 1.0 - Front-end (cliente)
// Ao clicar no botão, altera o conteúdo de um elemento do DOM
// sem recarregar a página.

const botao = document.getElementById("btn-mensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    mensagem.textContent = "Hello World! Mensagem exibida pelo JavaScript, sem recarregar a página.";
});
