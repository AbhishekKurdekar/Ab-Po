/* ❤️ HEART GENERATOR */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);

/* 🔐 UNLOCK */
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "love") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").innerText = "Wrong secret 💔";
  }
}

/* 💔 NO BUTTON */
function moveNo() {
  const btn = document.getElementById("no");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 70 + "vw";
  btn.style.top = Math.random() * 70 + "vh";
}

/* 💍 YES → FINAL PAGE */
function goFinal() {
  document.getElementById("content").style.display = "none";
  document.getElementById("finalScreen").style.display = "flex";
}
