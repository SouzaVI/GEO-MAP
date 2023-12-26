 from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_coordinates', methods=['POST'])
def get_coordinates():
    data = request.get_json()
    lat = data['lat']
    lon = data['lon']
    # Faça algo com os valores de lat e lon, por exemplo, armazene-os em um banco de dados
    print(f'Clicked at Latitude: {lat}, Longitude: {lon}')
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
