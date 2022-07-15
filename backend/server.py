from flask import Flask
from flask import request
from  flask import jsonify

from math import sqrt
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

def calculate_hypotenuse(n1, n2):
    return str(sqrt(n1**2 + n2**2))

def calculate_side(n1, n2):
    return str(sqrt(n1**2 - n2**2))

@app.route('/', methods=['GET'])
def index():
    url = "https://flask-api-vert.vercel.app/api/calculate"
    return f'<h1>Rotas disponíveis: </h1><ul><li><a href="{url}">Calculate</a></li></ul>'

@app.route('/api/calculate', methods=['POST', 'GET'])
def calculate():
    if request.method == 'GET':
        return jsonify({"message": "Use o método POST para enviar os dados"})

    if request.method == 'POST':
      data = request.get_json()

      if ['values', 'relation'] != [*data]:
        return jsonify("Ocorreu um erro: Input malformado!")

      values = data['values']
      relation = data['relation']

      if len(values) != 2:
        return jsonify("Ocorreu um erro: São necessários 2 lados para o cálculo.")

      if 'side' != relation and 'hypotenuse' != relation:
        return jsonify("Ocorreu um erro: Operação de cálculo inválida.")

      if relation == 'hypotenuse':
        return jsonify(calculate_hypotenuse(values[0], values[1]))
      else:
        values.sort(reverse=True)
        return jsonify(calculate_side(values[0], values[1]))
