// Hello-Flask 2.0 - Front-end (cliente)
// Ao clicar no botão, faz uma requisição GET para /api/pegadados com fetch(),
// interpreta o JSON recebido e atualiza o DOM sem recarregar a página.

const botao = document.getElementById("btn-buscar");
const mensagem = document.getElementById("mensagem");
const detalhes = document.getElementById("detalhes");

botao.addEventListener("click", async function () {
    mensagem.textContent = "Carregando...";
    detalhes.textContent = "";

    try {
        const resposta = await fetch("/api/pegadados");

        if (!resposta.ok) {
            throw new Error("Erro HTTP " + resposta.status);
        }

        // Converte o corpo da resposta (texto JSON) em objeto JavaScript
        const dados = await resposta.json();

        mensagem.textContent = dados.mensagem;
        detalhes.textContent = "Versão: " + dados.versao + " | Horário do servidor: " + dados.horario;
    } catch (erro) {
        mensagem.textContent = "Não foi possível buscar os dados: " + erro.message;
    }
});
