const burgerBtn = document.getElementById("burgerBtn");

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("menu-open");
  });
}
