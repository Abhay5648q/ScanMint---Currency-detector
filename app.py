from flask import Flask, render_template, request, jsonify
import importlib
try:
    tf = importlib.import_module('tensorflow')
    load_model = tf.keras.models.load_model
    image = tf.keras.preprocessing.image
except Exception:
  
    try:
        keras = importlib.import_module('keras')
        load_model = keras.models.load_model
        image = keras.preprocessing.image
    except Exception:
        raise ImportError("Neither 'tensorflow' nor standalone 'keras' could be imported; please install one of them.")
try:
    np = importlib.import_module('numpy')
except Exception:
    raise ImportError("The 'numpy' package is required but could not be imported; install it with 'pip install numpy'")

import os

app = Flask(__name__)
model = load_model('model/cnn_model.h5')  #model path 

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'})

    file = request.files['file']
    file_path = os.path.join('static', 'uploads', file.filename)
    file.save(file_path)

    #image processing
    img = image.load_img(file_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0) / 255.0

    prediction = model.predict(img_array)
    label = 'Original' if prediction[0][0] > 0.5 else 'Fake'

    return jsonify({
        'label': label,
        'confidence': round(float(prediction[0][0]) * 100, 2)
    })

if __name__ == '__main__':
    app.run(debug=True)
