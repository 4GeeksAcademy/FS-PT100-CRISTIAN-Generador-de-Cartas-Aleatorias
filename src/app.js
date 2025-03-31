import "bootstrap";
import "./style.css";


//Variables

const palos = ["♦", "♥", "♠", "♣"];
const simbolos = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const paloUp = document.querySelector("#paloUp")
const values = document.querySelector("#value")
const paloDown = document.querySelector("#paloDown")
const body = document.querySelector("body")
const card = document.querySelector("#card")

//Funciones

const cardRandom = (arr) => Math.floor(Math.random() * arr.length);

// const cardCreation = (arrPalos, arrValues) => {
// }

const palo = palos[cardRandom(palos)];
console.log("esta es mi constante palo: ", palo);

const simbolo = simbolos[cardRandom(simbolos)]
console.log("esta es mi constante simbolos: ", simbolo);

if (palo === "♥" || palo === "♦") { 
  paloUp.style.color = "red";
  paloDown.style.color = "red";
  values.style.color = "red";
}

paloUp.innerText = palo
values.innerText = simbolo
paloDown.innerText = palo
card.appendChild(paloUp)
card.appendChild(values)
card.appendChild(paloDown)
body.appendChild(card)

//Eventos
window.onload = function () {
  console.log(cardRandom(palos));
  console.log(valueExtract(palos));
  cardCreation(palos)

};
