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

function populateHeader(obj) {
  let title = document.createElement("h1");
  title.textContent = obj["Title"];
  selectHeader.appendChild(title);

  let subHeader = document.createElement("h2");
  subHeader.textContent = `Location: ${obj["Location"]} // Date: ${obj["Date"]}`;
  selectHeader.appendChild(subHeader);
}

function showOccupations(obj) {

}