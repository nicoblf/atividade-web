# Hello-Flask 2.0

**Versão 2: comunicação entre front-end e back-end com JSON**

Protótipo web em duas camadas:

- **Cliente (front-end):** HTML, CSS e JavaScript
- **Servidor (back-end):** Python com Flask

Em relação à versão 1, esta versão acrescenta uma rota de API. O JavaScript consulta essa rota com `fetch()` e recebe os dados em JSON.

## Evolução

| Versão | Evolução | Rota | Contexto |
|---|---|---|---|
| hello-flask-1 | Flask + HTML/CSS/JS | `/` | serve uma página HTML |
| hello-flask-2 | + fetch() + GET + JSON | `/api/pegadados` | consulta dados (JSON) |

## Funcionamento

1. **Carregamento inicial da interface:** o navegador solicita a rota `/`. O Flask renderiza o `index.html` e o devolve.
2. **Busca assíncrona de dados:** quando o usuário clica no botão, o `script.js` faz um `GET` para `/api/pegadados` com `fetch()`. O servidor responde em JSON, e o JavaScript usa `resposta.json()` para ler os dados e atualizar o DOM, sem recarregar a página.

Exemplo de resposta da API:

```json
{
  "mensagem": "Olá! Estes dados vieram do servidor Flask em formato JSON.",
  "versao": "hello-flask-2",
  "horario": "28/10/2026 10:30:00"
}
```

O fluxo completo está no diagrama de sequência em [documentacao/diagrama-sequencia.puml](documentacao/diagrama-sequencia.puml), no formato PlantUML.

## Estrutura

```
hello-flask-2/
├── app.py
├── requirements.txt
├── README.md
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
└── documentacao/
    └── diagrama-sequencia.puml
```

## Como executar

```bash
# criar e ativar o ambiente virtual
python3 -m venv venv
source venv/bin/activate        # no Windows: venv\Scripts\activate

# instalar as dependências
pip install -r requirements.txt

# iniciar o servidor
python app.py
```

Depois, acesse http://127.0.0.1:5000 no navegador e clique em **Buscar dados**.

Para ver a API diretamente, acesse http://127.0.0.1:5000/api/pegadados.
