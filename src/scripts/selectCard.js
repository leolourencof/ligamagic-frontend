function selectCard() {
  const ul = document.getElementById("cards-container");
  const img = document.getElementById("view-card");

  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      img.src = e.target.src;
    }
  });
}
selectCard();
