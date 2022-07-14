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

@app.route('/api/calculate', methods=['POST'])
def calculate():
    if (request.method == 'POST'):
        data = request.get_json()

        side_a = data['sideA']
        side_b = data['sideB']
        side_c = data['sideC']

        print(side_a, side_b, side_c)

        if (side_c == None) or (side_c == ''):
            return jsonify({'sideA': side_a, 'sideB': side_b, 'sideC': calculate_hypotenuse(int(side_a), int(side_b))})
        else:
          if (side_a == None) or (side_a == ''):
            return jsonify({'sideA': calculate_side(int(side_c), int(side_b)), 'sideB': side_b, 'sideC': side_c})
          elif (side_b == None) or (side_b == ''):
            return jsonify({'sideA': side_a, 'sideB': calculate_side(int(side_c), int(side_a)), 'sideC': side_c})
          else:
            return jsonify("Houve um erro")

if __name__ == '__main__':
    app.run(debug=True)