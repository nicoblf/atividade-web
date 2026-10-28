# Hello-Flask 2.0 - Back-end (servidor)
# Etapa 1: a rota "/" entrega a página HTML (carregamento inicial da interface).
# Etapa 2: a rota "/api/pegadados" entrega dados em JSON (busca assíncrona via fetch).

from datetime import datetime

from flask import Flask, jsonify, render_template

app = Flask(__name__)


@app.route("/")
def index():
    # Procura o arquivo dentro da pasta "templates"
    return render_template("index.html")


@app.route("/api/pegadados", methods=["GET"])
@app.route("/api/dados", methods=["GET"])
def pega_dados():
    # jsonify converte o dicionário Python em uma resposta HTTP no formato JSON
    dados = {
        "mensagem": "Olá! Estes dados vieram do servidor Flask em formato JSON.",
        "versao": "hello-flask-2",
        "horario": datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
    }
    return jsonify(dados)


if __name__ == "__main__":
    app.run(debug=True)
