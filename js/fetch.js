const apiUrl = "https://api.covid19india.org/v4/min/data.min.json";
const form_el = document.getElementById("myForm");
const state = document.getElementById("state");

form_el.addEventListener("submit", function (evt) {
  evt.preventDefault();
  getData();
});

async function getData() {
  try {
    let dataTable = document.getElementById("data");
    let data = await fetch(apiUrl);
    let response = await data.json();
    let name = state.value;
    console.log(name);
    console.log(response[name].total);
    dataTable.innerHTML = `
        <td>${response[name].total.confirmed}</td>
        <td>${response[name].total.deceased}</td>
        <td>${response[name].total.recovered}</td>
        <td>${response[name].total.vaccinated}</td>
    `;
  } catch (err) {
    console.log(err);
  }
}
