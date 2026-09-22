# ScanMint – Currency Detector 💵🔍

ScanMint is a **currency authenticity detection system** that uses a **Convolutional Neural Network (CNN)** to analyze an uploaded currency image and predict whether the currency is **Real or Fake**.

The project combines a web-based frontend with a Python-based machine learning model to provide an easy-to-use interface for currency detection.

> **Note:** This project is an academic/portfolio project. The CNN model may occasionally produce incorrect predictions, and the result should not be considered a definitive method for verifying currency authenticity.

---

## 🚀 Features

* 📷 Upload an image of currency
* 🤖 CNN-based currency classification
* 💵 Predicts **Real** or **Fake** currency
* 📊 Displays the prediction result
* 🌐 Simple and user-friendly web interface
* 🐍 Python-based machine learning backend
* 🧠 Trained CNN model stored in `.h5` format
* ⚡ Image preprocessing before prediction

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Machine Learning

* Python
* TensorFlow / Keras
* Convolutional Neural Network (CNN)
* Flask


### Model

* Keras `.h5` model
* Image classification

### Development Tools

* Git
* GitHub
* VS Code

---

## 🧠 How It Works

The basic workflow of ScanMint is:

```text
User
  │
  ▼
Upload Currency Image
  │
  ▼
Frontend
  │
  ▼
Python Backend
  │
  ▼
Image Preprocessing
  │
  ▼
CNN Model (.h5)
  │
  ▼
Prediction
  │
  ├── Real
  │
  └── Fake
  │
  ▼
Display Result
```

The uploaded image is first processed into the format expected by the trained CNN model. The model then performs classification and returns the predicted result.

---

## 📁 Project Structure

```text
ScanMint---Currency-detector/
│
├── model/
│   └── cnn_model.h5
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/
│   └── index.html
│
├── app.py
├── requirements.txt
├── README.md
└── ...
```

> The exact folder structure may vary depending on the current version of the project.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Abhay5648q/ScanMint---Currency-detector.git
```

Navigate into the project:

```bash
cd ScanMint---Currency-detector
```

---

### 2. Create a virtual environment

Windows:

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

For macOS/Linux:

```bash
source venv/bin/activate
```

---

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Run the application

If the backend entry point is `app.py`:

```bash
python app.py
```



Open the URL in your browser.

---

## 📦 Model

The project uses a trained CNN model stored as:

```text
model/cnn_model.h5
```

Because the model file is larger than GitHub's standard 100 MB file limit, it is managed using **Git Large File Storage (Git LFS)**.

To install Git LFS:

```bash
git lfs install
```

To download LFS files after cloning:

```bash
git lfs pull
```

---

## 🔬 Machine Learning Pipeline

The prediction pipeline follows these general steps:

```text
Currency Image
      │
      ▼
Image Loading
      │
      ▼
Image Resizing
      │
      ▼
Normalization / Preprocessing
      │
      ▼
CNN Model
      │
      ▼
Classification
      │
      ▼
Real / Fake
```

The CNN learns visual patterns from the training dataset and uses those learned features to classify previously unseen currency images.

---

## 📊 Model Performance

The model achieved approximately **95% accuracy** during development/testing.

However, model performance can vary depending on:

* Image quality
* Lighting conditions
* Camera angle
* Currency denomination
* Background
* Image preprocessing
* Dataset quality
* Images that differ significantly from the training dataset

---

## ⚠️ Limitations

ScanMint is currently a **prototype/academic project** and should not be used as an official currency authentication system.

The model may produce incorrect predictions, particularly when:

* The image is blurry
* Currency is partially visible
* Lighting is poor
* The image contains significant background noise
* The currency note differs from the training data
* The image contains an unfamiliar denomination or design

The project is currently being improved to reduce incorrect predictions and improve model reliability.

---

## 🔮 Future Improvements

Possible future improvements include:

* Improve the training dataset
* Add support for more denominations
* Improve image preprocessing
* Improve model accuracy
* Add confidence scores
* Implement better validation techniques
* Reduce false positives and false negatives
* Deploy the Python inference API
* Improve mobile responsiveness
* Add a Flutter mobile application
* Explore transfer learning models
* Add better handling of unknown/unseen images

---

## 🌐 Deployment

The project can be deployed using a separated frontend and backend architecture.

```text
Frontend
   │
   ▼
Vercel
   │
   │ API Request
   ▼
Python Backend
   │
   ▼
CNN Model
   │
   ▼
Prediction
```

The frontend can be hosted on **Vercel**, while the Python machine-learning backend can be hosted on a platform that supports the required Python/ML dependencies.

---

## 👨‍💻 Developer

**Abhay Singh**

MCA Graduate | Software Developer

Interested in:

* Flutter Development
* Java
* Python
* Machine Learning
* Data Structures & Algorithms
* Application Development

---

## 📌 Project Status

🚧 **Active Development**

The current version demonstrates the core currency classification workflow. Improvements are being made to model reliability, deployment, and overall application functionality.

---

## 📄 Disclaimer

ScanMint is developed for **educational and demonstration purposes**. Predictions generated by the system should not be treated as an official determination of currency authenticity.

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.
