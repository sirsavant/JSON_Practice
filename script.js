/*

JSON - a text-based data format file which has the same syntax compared to javascript objects where data is stored in property-value pairs and arrays. It is mainly used to transfer data in web applications. JSON exists as a string and when you need to use JSON, you need to deserialize it to use it in your program. When you need to convert it back to a string, you serialize it. JavaScript has a global object called JSON that provides methods for you to modify JSON.

*/

const selectHeader = document.querySelector("header");
const selectSection = document.querySelector("section");

let requestURL = "https://sirsavant.github.io/JSON_Practice/file.json";

let request = new XMLHttpRequest();

// opens request
request.open("GET", requestURL);

// sets response type json so XHR knows that the server will be returning json.
request.responseType = "json";
request.send();

// Once the request is received and loaded, the function executes. We are storing the response in a variable called occupations and calling two other functions.
request.onload = function() {
  const occupations = request.response;
  populateHeader(occupations);
  showOccupations(occupations);
}

// populateHeader and showOccupations functions follow a process of creating the element > adding the specified value in the JSON as textContent to the created element > using the appendChild method to append the created element to the appropriate parent element.

// populates the header 
function populateHeader(obj) {
  let title = document.createElement("h1");
  title.textContent = obj["Title"];
  selectHeader.appendChild(title);

  let subHeader = document.createElement("h2");
  subHeader.textContent = `Location: ${obj["Location"]} // Date: ${obj["Date"]}`;
  selectHeader.appendChild(subHeader);
}

// populates the section
function showOccupations(obj) {
  for (let i = 0; i < obj["Types"].length; i++) {
    const selectTypes = obj["Types"][i];

    let createArticle = document.createElement("article");
    let createOccupation = document.createElement("h3");
    let createAge = document.createElement("p");
    let createSpecialtiesTitle = document.createElement("p");
    
    createOccupation.textContent = `Occupation: ${selectTypes["Occupation"]}`;;
    createArticle.appendChild(createOccupation);

    createAge.textContent = `Age: ${selectTypes["Age"]}`;
    createArticle.appendChild(createAge);

    createSpecialtiesTitle.textContent = "Specialties:";
    createArticle.appendChild(createSpecialtiesTitle);

      for (let j = 0; j < obj["Types"][i]["Specialties"].length; j++) {
        const selectSpecialties = selectTypes["Specialties"][j];        
        let createSpecialtiesList = document.createElement("ul");
        let createLineItem = document.createElement("li");

        createLineItem.textContent = selectSpecialties;
        createSpecialtiesList.appendChild(createLineItem);
      }

    createArticle.appendChild(createSpecialtiesList);
    
    selectSection.appendChild(createArticle);
  }
}