//1.
const button = document.querySelector(".click-here");
function clickHere(e) {
  console.log("click Here", e);
}
button.addEventListener("click", button.remove);

//2.
const body = document.querySelector("body");
const divBlock = document.createElement("div");

divBlock.innerHTML = `
<img src="https://picsum.photos/id/1/200/300" alt="image">
 `;
body.appendChild(divBlock);

//3.

//.4

const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];
function renderCards(userArr) {
  const characterCard = userArr.map((el) => {
    return `<div class=character-card><img src="${el.image}"><div class=character-info><p>
        ${el.first_name} ${el.last_name}</p><p>House: ${el.house}</p></div></div> `;
  });
  return characterCard;
}
let charactersHTML = renderCards(characters).join("");
let userCardList = document.createElement("div");
const charactersLi = document.getElementById("characters-list");
charactersLi.innerHTML = charactersHTML;
