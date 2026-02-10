const mainContainer = document.getElementById("mainContainer");
const successContainer = document.getElementById("successContainer");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const floatingHearts = document.getElementById("floatingHearts");

/* Floating background hearts */
function spawnHeart() {
  const hearts = ["💖", "💕", "💗", "❤️"];
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  floatingHearts.appendChild(heart);

  setTimeout(() => heart.remove(), 9000);
}

setInterval(spawnHeart, 300);

/* No button behaviour */
let clicks = 0;
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clicks++;

  noBtn.style.transform = `scale(${Math.max(0.3, 1 - clicks * 0.15)})`;
  yesBtn.style.transform = `scale(${1 + clicks * 0.2})`;
});

/* Yes button */
yesBtn.addEventListener("click", () => {
  mainContainer.style.display = "none";
  successContainer.style.display = "block";
  explodeHearts();
});

/* Heart explosion */
function explodeHearts() {
  const hearts = ["💖", "💕", "💘", "❤️"];
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "celebration-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "%";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, i * 80);
  }
}
