const cards = [
  {
    id: 1,
    path: "assets/images/FirstImage.svg",
  },
  {
    id: 2,
    path: "assets/images/SecondImage.svg",
  },
  {
    id: 3,
    path: "assets/images/ThirdImage.svg",
  },
  {
    id: 4,
    path: "assets/images/FirstImage.svg",
  },
  {
    id: 5,
    path: "assets/images/SecondImage.svg",
  },
  {
    id: 6,
    path: "assets/images/ThirdImage.svg",
  },
];

function renderCards(cardList) {
  const ul = document.getElementById("cards-container");

  cardList.forEach((element) => {
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");

    li.style.cursor = "pointer";

    img.src = element.path;

    ul.appendChild(li).appendChild(figure).appendChild(img);
  });
}
renderCards(cards);
