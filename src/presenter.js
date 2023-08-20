import bisiesto from "./bisiesto";

const first = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number.parseInt(first.value);

  div.innerHTML = "<p>" + bisiesto(year) + "</p>";
});
