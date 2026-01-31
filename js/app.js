// INFO – Switch Concept / Qualité (cartes + thumb + texte ligne par ligne)

const infoSection = document.querySelector(".info");
const switchButtons = document.querySelectorAll(".info-switch__btn");
const switchThumb = document.querySelector(".info-switch__thumb");
const infoTitle = document.querySelector(".info-title");
const infoText = document.querySelector(".info-text");

let currentMode = "concept";

const content = {
  concept: {
    titleLines: [
      "Chaque flamme",
      "a une histoire.",
      "Nous lui offrons",
      "une seconde",
      "vie."
    ],
    textLines: [
      "Des pièces anciennes sélectionnées",
      "avec <strong>soin</strong>,",
      "<strong>restaurées</strong> pour durer,",
      "entre collection et flamme du",
      "quotidien."
    ]
  },
  qualite: {
    titleLines: [
      "Un travail précis",
      "et maîtrisé.",
      "Conçu pour un usage durable."
    ],
    textLines: [
      "Chaque briquet est entièrement démonté,",
      "nettoyé et contrôlé avec attention.",
      "Les mécanismes sont vérifiés",
      "pour garantir fiabilité et longévité."
    ]
  }
};

function setActiveButton(mode) {
  switchButtons.forEach((btn) => {
    const isActive = btn.dataset.mode === mode;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function moveThumb(mode) {
  switchThumb.style.transform = mode === "concept" ? "translateX(0)" : "translateX(100%)";
}

function renderLines(el, lines, baseDelay = 0) {
  el.innerHTML = `<div class="info-lines"></div>`;
  const wrap = el.querySelector(".info-lines");

  lines.forEach((lineHTML, i) => {
    const line = document.createElement("span");
    line.className = "info-line";
    line.style.animationDelay = `${baseDelay + i * 0.12}s`;
    line.innerHTML = lineHTML;
    wrap.appendChild(line);
  });
}

function updateText(mode) {
  renderLines(infoTitle, content[mode].titleLines, 0.00);
  renderLines(infoText, content[mode].textLines, 0.10);
}

function updateCards(mode) {
  infoSection.classList.toggle("is-qualite", mode === "qualite");
}

function switchMode(mode) {
  if (mode === currentMode) return;

  currentMode = mode;
  setActiveButton(mode);
  moveThumb(mode);

  // swap cartes en douceur
  updateCards(mode);

  // relance l'animation texte
  updateText(mode);
}

switchButtons.forEach((btn) => {
  btn.addEventListener("click", () => switchMode(btn.dataset.mode));
});

// init
updateText("concept");
updateCards("concept");
setActiveButton("concept");
moveThumb("concept");

// BURGER MENU
const burgerBtn = document.getElementById("burgerBtn");

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("menu-open");
  });
}



