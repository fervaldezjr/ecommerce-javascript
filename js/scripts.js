const planets = [];

let newPlanet = prompt("Introduce el nombre de un planeta");
let breakWhile = false;

while (breakWhile == false) {
  if (newPlanet != "") {
    planets.push(newPlanet);
  }

  console.log(newPlanet);
  console.log(planets);

  if (planets.length < 0) {
    alert("Actualmente hay 0 planetas en tu array");
    breakWhile == true;
    break;
  } else {
    alert(
      "En este momento tienes " + planets.length + " planeta(s) en tu array"
    );
  }
  breakWhile == true;
  break;
}
