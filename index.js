import PrintContent from "/src/js/PrintContent.js";
const api = "/src/js/API.json";

const printContent = new PrintContent();

fetch(api)
  .then((response) => response.json())
  .then((data) => printContent.fetchData(data))
  .catch((error) => console.log(error));
