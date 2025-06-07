const overlay = document.getElementById("overlay");
const navbar = document.getElementById("navbar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function openOverlay() {
  overlay.classList.add("fade-in");
  navbar.classList.add("transparent");
  openBtn.style.display = "none";
  closeBtn.classList.add("visible");
}

function closeOverlay() {
  overlay.classList.remove("fade-in");
  navbar.classList.remove("transparent");
  closeBtn.classList.remove("visible");
  openBtn.style.display = "block";
}
