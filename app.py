from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)

# Load the model and required data
with open('model.pkl', 'rb') as f:
    knn_model = pickle.load(f)
    cv = pickle.load(f)
    df_idf = pickle.load(f)
    data = pickle.load(f)
    all_symptoms = pickle.load(f)
    input_symptoms = pickle.load(f)
    top_diseases = pickle.load(f)
    indices = pickle.load(f)
    distances = pickle.load(f)
    k = pickle.load(f)
    cols = pickle.load(f)
    df = pickle.load(f)
    docs = pickle.load(f)
    word_count_vector = pickle.load(f)
    tfidf_transformer = pickle.load(f)
    input_vector = pickle.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get symptoms from request
    symptoms = request.json.get('symptoms', [])
    print(symptoms)
    # Transform input symptoms
    input_vector = cv.transform(symptoms)

    # Find nearest neighbors
    distances, indices = knn_model.kneighbors(input_vector, n_neighbors=300)
    print(distances)
    print(indices)
    # Get top diseases
    top_diseases = data.iloc[indices[0]]['disease']
    top_diseases = top_diseases.drop_duplicates()
    
    # Get top symptoms
    all_symptoms = []
    for i in indices[-1]:
        symp = docs[i].split(',')
        symp = symp[: -2]
        all_symptoms += [s for s in symp if s not in input_symptoms]

    all_symptoms = list(set(all_symptoms))
    all_symptoms = [s for s in all_symptoms if s not in symptoms]
    all_symptoms.sort(key=lambda x: df_idf.loc[x]['idf_weights'], reverse=True)
    top_symptoms = all_symptoms[:10]

    return jsonify({
        'top_diseases': top_diseases.tolist(),
        'top_symptoms': top_symptoms
    })

if __name__ == '__main__':
    app.run(debug=True)
