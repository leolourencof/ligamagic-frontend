function counter() {
  const counterElement = document.getElementById("counter");
  const increase = document.getElementById("increase");
  const decrement = document.getElementById("decrement");

  let count = Number(counterElement.textContent);
  
  counterElement.classList.add("font-semibold");

  increase.addEventListener("click", () => {
    count++;
    counterElement.textContent = count;
  });

  decrement.addEventListener("click", () => {
    if (count > 1) count--;
    counterElement.textContent = count;
  });
}
counter();
