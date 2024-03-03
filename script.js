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
        let uniqueDiseases = [];
        data.forEach((item) => {
            if (!uniqueDiseases.includes({name: item.name, gender: item.gender, ageGroup: item.ageGroup})) {
                uniqueDiseases.push({name: item.name, gender: item.gender, ageGroup: item.ageGroup});
            }
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
        let newData = [];
        data.forEach((item) => {
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