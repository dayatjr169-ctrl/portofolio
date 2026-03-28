const texts = [
"HTML Structure",
"CSS Design",
"JavaScript Functionality"
 
 
];

let index = 0;
let charIndex = 0;

function typeEffect() {
  const typing = document.getElementById("typing");

  if (charIndex < texts[index].length) {
    typing.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  const typing = document.getElementById("typing");

  if (charIndex > 0) {
    typing.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index++;
    if (index >= texts.length) index = 0;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});