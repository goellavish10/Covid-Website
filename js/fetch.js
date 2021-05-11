const apiUrl = "https://api.covid19india.org/v4/min/data.min.json";
const form_el = document.getElementById("myForm");

function val() {
  var d = document.getElementById("selected").value;

  getData(d);
}

async function getData(stateName) {
  try {
    let state = stateName;
    let dataTable = document.getElementById("data");
    console.log(state);
    let data = await fetch(apiUrl);
    let response = await data.json();
    let name = state;
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
