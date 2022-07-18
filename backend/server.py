from flask import Flask
from flask import request
from  flask import jsonify

from math import sqrt
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Função que calcula a hipotenusa a partir dos lados
def calculate_hypotenuse(n1, n2):
    return str(sqrt(n1**2 + n2**2))

# Função que calcula um lado a partir da hipotenusa e de outro lado
def calculate_side(n1, n2):
    return str(sqrt(n1**2 - n2**2))

# Rota com o endpoint padrão "/"
@app.route('/', methods=['GET'])
def index():
    url = "https://flask-api-vert.vercel.app/api/calculate"
    return f'<h1>Rotas disponíveis: </h1><ul><li><a href="{url}">Calculate</a></li></ul>'

# Rota com o endpoint "/api/calculate"
@app.route('/api/calculate', methods=['POST', 'GET'])
def calculate():
    if request.method == 'GET':
        # Mensagem para auxiliar o desenvolvedor que está utilizando o endpoint
        return jsonify({"message": "Utilize o verbo HTTP POST para o envio de dados"})
 
    if request.method == 'POST':
      # Recebe os dados do request
      data = request.get_json()

      # Verifica se os dados atendem aos requisitos
      if ['values', 'relation'] != [*data]:
        return jsonify("Ocorreu um erro: Input malformado!")

      values = data['values']
      relation = data['relation']

      # Verifica se o array possui um tamanho válido de 2 ou não
      if len(values) != 2:
        return jsonify("Ocorreu um erro: São necessários 2 lados para o cálculo.")

      # Verifica se o valor de relation é válido
      if 'side' != relation and 'hypotenuse' != relation:
        return jsonify("Ocorreu um erro: Operação de cálculo inválida.")

      # Verifica se relation é hipotenusa ou lado e chama a função adequada
      if relation == 'hypotenuse':
        return jsonify(calculate_hypotenuse(values[0], values[1]))
      else:
        values.sort(reverse=True)
        return jsonify(calculate_side(values[0], values[1]))

if __name__ == '__main__':
    app.run(debug=True)
