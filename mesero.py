from flask import Flask, jsonify, request
from flask_cors import CORS
from flask import render_template

app = Flask(__name__)

CORS(app)

@app.route("/saludar", methods=["GET"])
def hello_world():
    return jsonify({"message": "Hello, World!"})

@app.route("/envio", methods=["POST"])
def postUsuario():
    data = request.get_json()
    if not data or 'usuario' not in data or 'password' not in data:
        return jsonify({"error": "Faltan los campos 'usuario' o 'password'"}), 400

    usuario = data['usuario']
    password = data['password']
    response = {"Usuario registrado": usuario, "Password registrado": password}
    
    return jsonify(response)

@app.route("/ingrediente", methods=["GET"])
def getIngrediente():
    return jsonify({"ingrediente": "Tomate"})

@app.route("/huevo", methods=["GET"])
def getHuevo():
    return jsonify({"Colores del huevo": ["Blanco", "Marron", "Rojo", "Negro", "Pintito"]})

@app.route('/tarjeta/')
@app.route('/tarjeta/<name>')
def getTarjeta(name=None):
    return render_template('tarjeta.html', person=name)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)