from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd
from collections import Counter
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)

# Load the saved model and related data
with open('model.pkl', 'rb') as f:
    knn_model = pickle.load(f)
    cv = pickle.load(f)
    new_cv = pickle.load(f)
    df_idf = pickle.load(f)
    data = pickle.load(f)
    all_symptoms = pickle.load(f)
    input_symptoms = pickle.load(f)
    input_age = pickle.load(f)
    input_gender = pickle.load(f)
    top_diseases = pickle.load(f)
    indices = pickle.load(f)
    distances = pickle.load(f)
    k = pickle.load(f)
    cols = pickle.load(f)
    df = pickle.load(f)
    docs = pickle.load(f)
    word_count_vector = pickle.load(f)
    tfidf_transformer = pickle.load(f)
    new_word_count_vector = pickle.load(f)
    new_tfidf_transformer = pickle.load(f)
    input_vector = pickle.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the request
    req_data = request.json
    input_age = req_data['age']
    input_gender = req_data['gender']
    input_symptoms = req_data['symptoms']

    if(len(input_symptoms) < 3):
        k = 5
    elif(len(input_symptoms) < 5):
        k = 3
    elif(len(input_symptoms) < 7):
        k = 2
    else:
        k = 1

    # Process the data to get the list of symptoms
    docs = []
    filter_df = []
    for i in range(len(df)):
        item = []
        for j in range(len(cols)):
            if df.iloc[i][j] == '1':
                item.append(cols[j])
        if(item[-1] == input_age and item[-2] == input_gender):
            docs.append(','.join(item[:-2]))
            filter_df.append(data.iloc[i]['disease'])
    
    # Compute the TF-IDF values for input symptoms
    input_vector = cv.transform(input_symptoms)
    input_tfidf = tfidf_transformer.transform(input_vector)

    # Find the top k diseases
    distances, indices = knn_model.kneighbors(input_tfidf, n_neighbors=k)

    top_diseases = []
    for i in indices[0]:
        top_diseases.append(filter_df[i])

    # Get top 10 symptoms related to the predicted diseases
    all_symptoms = []
    for i in indices[0]:
        symp = docs[i].split(',')
        all_symptoms += [s for s in symp if s not in input_symptoms]

    counts = Counter(all_symptoms)
    sorted_symptoms = sorted(counts, key=counts.get)
    
    return jsonify({
        'top_diseases': top_diseases,
        'top_symptoms': sorted_symptoms
    })

if __name__ == '__main__':
    app.run(debug=True)