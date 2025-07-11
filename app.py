
from flask import Flask, render_template, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Cargar modelo MLP y scaler
modelo = joblib.load('modelo_mlp.pkl')
scaler = joblib.load('scaler.pkl')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predecir', methods=['POST'])


def predecir():
    data = request.json['respuestas']
    df = pd.DataFrame([data])

    # Escalar los datos antes de predecir (porque el modelo lo necesita)
    datos_escalados = scaler.transform(df)

    # Obtener predicciones probabilísticas para manejar empates
    proba = modelo.predict_proba(datos_escalados)[0]
    max_proba = max(proba)
    clases = modelo.classes_

    # Seleccionar perfiles con la máxima probabilidad (posibles empates)
    perfiles = [clase for clase, p in zip(clases, proba) if p == max_proba]

    # Normalizar nombres para que coincidan con los usados en script.js
    nombres_correctos = {
        "Salud": "Ciencias Ecológicas, Biológicas y de la Salud",
        "Arte": "Arte y Creatividad",
        "Sociales": "Ciencias Sociales",
        "Economía": "Económica, Administrativa y Financiera",
        "Tecnología": "Ciencia y Tecnología"
    }

    perfiles_normalizados = [nombres_correctos.get(p, p) for p in perfiles]

    return jsonify({'perfiles': perfiles_normalizados})

if __name__ == '__main__':
    app.run(debug=True)

