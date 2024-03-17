const testData = [
    {
     "name": "Acne",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "total": 4
    },
    {
     "name": "Allergic Rhinitis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Alzheimer",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Amyotrophic Lateral Sclerosis",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Anemia",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Anxiety",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Anxiety Disorders",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Arthritis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Asthma",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Hyperactivity Disorder",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "total": 4
    },
    {
     "name": "Autism Spectrum Disorder",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "total": 6
    },
    {
     "name": "Basal Cell Carcinoma",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Bipolar Disorder",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Bronchitis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Cardiovascular Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Cataracts",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Chickenpox",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Chikungunya",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Chronic Back Pain",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Chronic Fatigue Syndrome",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Chronic Kidney Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Chronic Liver Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Chronic Obstructive Pulmonary Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Chronic Sinusitis",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Cirrhosis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Colitis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Common Cold",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Conjunctivitis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Constipation",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Coronary Artery Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Cough",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "COVID-19",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Crohn's Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Dengue Fever",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Dengue Hemorrhagic Fever",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Depression",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Dermatitis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Diabetes Mellitus",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Diarrhea",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Digestive Disorders",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Diphtheria",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Ear Infection",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "total": 6
    },
    {
     "name": "Ebola Virus Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Eczema",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Emphysema",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Erectile Dysfunction",
     "male": 1,
     "adult": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Fibroids",
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Fibromyalgia",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Gastric Ulcers",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Gastroenteritis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Gingivitis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Glaucoma",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Gout",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Headache",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Heartburn",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Helicobacter Pylori Infection",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Hemophilia",
     "male": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Hepatitis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Hepatitis A",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Herpes Simplex Virus",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "HIV\/AIDS",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Human Papillomavirus Infection",
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Hypertension",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Indigestion",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Infertility",
     "male": 1,
     "female": 1,
     "adult": 1,
     "total": 2
    },
    {
     "name": "Influenza",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Insomnia",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Interstitial Lung Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Irritable Bowel Syndrome",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Japanese Encephalitis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Kidney Stones",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Leukemia",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Liver Cirrhosis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Lymphoma",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Macular Degeneration",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Malaria",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Measles",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Melanoma",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Menopausal Symptoms",
     "female": 1,
     "senior": 1,
     "total": 1
    },
    {
     "name": "Menstrual Irregularities",
     "female": 1,
     "adult": 1,
     "total": 1
    },
    {
     "name": "Migraine",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Multiple Sclerosis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Mumps",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Muscular Dystrophy",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "total": 6
    },
    {
     "name": "Myasthenia Gravis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Obesity",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Obsessive-Compulsive Disorder",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Osteoporosis",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Pancreatitis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Parkinson's Disease",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Peptic Ulcer Disease",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Peripheral Artery Disease",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Pertussis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Polio",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Polycystic Ovary Syndrome",
     "female": 1,
     "adult": 1,
     "total": 1
    },
    {
     "name": "Premature Ejaculation",
     "male": 1,
     "adult": 1,
     "total": 1
    },
    {
     "name": "Premenstrual Syndrome",
     "female": 1,
     "adult": 1,
     "total": 1
    },
    {
     "name": "Psoriasis",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Pulmonary Fibrosis",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Rabies",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Respiratory Syncytial Virus",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Restless Leg Syndrome",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Retinal Disorders",
     "male": 1,
     "female": 1,
     "senior": 1,
     "total": 2
    },
    {
     "name": "Rosacea",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Rubella",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Schizophrenia",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Scleroderma",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Sinusitis",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Sore Throat",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Sprains and Strains",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Squamous Cell Carcinoma",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Strep Throat",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Stroke",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Lupus",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Tetanus",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Thalassemia",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Thyroid Disorders",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Tonsillitis",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "total": 6
    },
    {
     "name": "Tooth Decay",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Tuberculosis",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Typhoid Fever",
     "male": 1,
     "female": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 6
    },
    {
     "name": "Urinary Tract Infection",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    },
    {
     "name": "Yellow Fever",
     "male": 1,
     "female": 1,
     "infant": 1,
     "child": 1,
     "adult": 1,
     "senior": 1,
     "total": 8
    },
    {
     "name": "Zika Virus",
     "male": 1,
     "female": 1,
     "adult": 1,
     "senior": 1,
     "total": 4
    }
   ];
// ---------------------------------------------- Functions ----------------------------------------------

// Load JSON file
function loadJSON(jsonFile) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', jsonFile, true);
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          var data = JSON.parse(xhr.responseText);
          resolve(data);
        } else {
          reject('Request failed with status: ' + xhr.status);
        }
      };
      xhr.onerror = function() {
        reject('Request failed');
      };
      xhr.send();
    });
  }

// ---------------------------------------------- Utils ----------------------------------------------

const DisplayPart = document.getElementById('DisplayPart');

// ---------------------------------------------- Main ----------------------------------------------

const Main = async () => {
    try {
        let DisplayContent = 'Display Data Here...';
        const data = await loadJSON('./NewData/NewData.json');
        const herbs = await loadJSON('./NewData/HerbsData.json');
        
        // check which desease name is missing in the data andd test data
        let dataDiseaseSet = new Set();
        let testDataDiseaseSet = new Set();
        data.forEach((item) => {
            dataDiseaseSet.add(item.name.toLowerCase());
        }
        );
        testData.forEach((item) => {
            testDataDiseaseSet.add(item.name.toLowerCase());
        });
        // find the difference between number of entries in data and test data of same disease name
            dataDiseaseSet.forEach((item) => {
                let total = data.filter((disease) => disease.name.toLowerCase() === item).length;
                let testTotal = testData.filter((disease) => disease.name.toLowerCase() === item)[0].total;
                if(total !== testTotal){
                    if(total > testTotal)
                        console.error(`${item}: ${total} > ${testTotal}`);
                    else
                        console.warn(`${item}: ${total} > ${testTotal}`);
                } else
                    console.info(`${item}: ${total} = ${testTotal}`);
            });

        // for checking duplicacy in data
            let DataSetSet = new Set();
            let NewDataSet = [];
            data.forEach((item) => {
                const ss = `${item.name}, ${item.gender}, ${item.ageGroup}`;
                if(DataSetSet.has(ss))
                    console.error(ss);
                else{
                    NewDataSet.push(item);
                    DataSetSet.add(ss);
                }
            });
            let newTestSet = new Set();
            const ages = ['infant', 'child', 'adult', 'senior'];
            testData.forEach((item) => {
                if(item.male === 1){
                   ages.forEach((age) => {
                          if(item[age] === 1)
                             newTestSet.add(`${item.name.toLowerCase()}, male, ${age}`);
                   });
                }
                if(item.female === 1){
                    ages.forEach((age) => {
                            if(item[age] === 1)
                                newTestSet.add(`${item.name.toLowerCase()}, female, ${age}`);
                    });
                }
            });
            console.log((Array.from(newTestSet)).sort());
            console.log((Array.from(DataSetSet)).sort());
            let printOut =[];
            newTestSet.forEach((item) => {
                if(DataSetSet.has(item))
                    printOut.push(item);
            });

            console.log(printOut);
            // console.log(NewDataSet);
        return;

        let herbsSet = new Set();
        herbs.forEach((item) => {
            herbsSet.add(item.name.toLowerCase());
            herbsSet.add(item.englishName.toLowerCase());
            herbsSet.add(item.hindiName.toLowerCase());
        });
        console.log(herbsSet);
        let dataSet = new Set();
        let cnt1 = 0, cnt2 = 0;
        data.forEach((item) => {
            item.ayurvedicRemedies.forEach((remedy) => {
                dataSet.add(remedy.toLowerCase());
                ++cnt1;
            });
        })
        console.log(dataSet);
        //find partial match of herbs in data
        let commonSet = new Set();
        herbsSet.forEach((item) => {
            dataSet.forEach((dataItem) => {
                if (dataItem.includes(item) || item.includes(dataItem)) {
                    commonSet.add(dataItem);
                    ++cnt2;
                }
            });
        });
        console.log(commonSet);
        console.log(cnt1, cnt2);    
        data.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else 
                a.gender > b.gender ? 1 : -1;
        });
        console.log(data);


        // Display name of unique diseases
        let uniqueDiseases = new Set();
        let c = 0;
        data.forEach((item) => {
            if(uniqueDiseases.has({name: item.name, gender: item.gender, ageGroup: item.ageGroup}))
                ++c;
            else
                uniqueDiseases.add({name: item.name, gender: item.gender, ageGroup: item.ageGroup});
        });


        //sort the uniqueDiseases array
        // uniqueDiseases.sort((a, b) => {
        //     if (a.name > b.name) {
        //         return 1;
        //     } else {
        //         return -1;
        //     }
        // });
        console.log(uniqueDiseases);


        // console all the count of the all fields in data
        let objKeys = Object.keys(data[0]);
        let countObj = {};
        objKeys.forEach((key) => {
            countObj[key] = 0;
        });
        data.forEach((item) => {
            objKeys.forEach((key) => {
                countObj[key] += 1;
            });
        });
        console.log(countObj);


        // convert all the field [name, ageGroup, gender] and symptom array to lowercase
        console.log("lowercase data")
        let newData = [];
        data.forEach((item) => {
            console.log(item.name)
            let newItem = item;
            newItem.name = item.name.toLowerCase();
            newItem.ageGroup = item.ageGroup.toLowerCase();
            newItem.gender = item.gender.toLowerCase();
            newItem.symptom = item.symptom.map((symp) => symp.toLowerCase());
            newData.push(newItem);
        });
        console.log(newData);

        let temp = '';
        newData.forEach((item, index) => {
            temp += `<p> => ${item.name}, ${item.ageGroup}, ${item.gender}<p>`;
        });
        DisplayContent = temp;

        DisplayPart.innerHTML = DisplayContent;
    } catch (error) {
        console.log(error);
    }
}

Main();