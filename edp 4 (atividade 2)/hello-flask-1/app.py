# Hello-Flask 1.0 - Back-end (servidor)
# Recebe a requisição HTTP na rota "/" e devolve a página HTML ao navegador.

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    # Procura o arquivo dentro da pasta "templates"
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
