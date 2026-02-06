function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "040825") {
    lockScreen.style.display = "none";
    content.style.display = "block";
    bgMusic.play();
  } else {
    error.innerText = "Wrong password 💔";
  }
}

function moveNo() {
  const no = document.getElementById("no");
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 40 - 20;
  no.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
  content.style.display = "none";
  finalScreen.style.display = "flex";

  setTimeout(() => {
    finalName.classList.add("show");
    finalMsg.classList.add("show");
  }, 800);
}
