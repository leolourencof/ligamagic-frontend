function isCarouselOverflowing() {
  const ul = document.getElementById("cards-container");
  return ul.scrollWidth > ul.clientWidth;
}

function updateCarousel(index) {
  const ul = document.getElementById("cards-container");
  const translateXValue = index * 123;

  ul.style.transition = "transform 0.5s ease-in-out";
  ul.style.transform = `translateX(${-translateXValue}px)`;
}
updateCarousel();

function carousel() {
  const lis = document.querySelectorAll("#cards-container li");

  const swipeLeft = document.getElementById("swipe-left");
  const swipeRight = document.getElementById("swipe-right");

  let index = 0;

  swipeLeft.addEventListener("click", () => {
    if (isCarouselOverflowing()) {
      index = (index + 1) % lis.length;
      updateCarousel(index);
    }
  });

  swipeRight.addEventListener("click", () => {
    if (isCarouselOverflowing()) {
      index = index > 0 ? index - 1 : 0;
      updateCarousel(index);
    }
  });

  function checkAndResetTranslate() {
    if (!isCarouselOverflowing()) {
      index = 0;
    } else {
      updateCarousel(index);
    }
  }
  window.addEventListener("resize", checkAndResetTranslate);
}
carousel();
