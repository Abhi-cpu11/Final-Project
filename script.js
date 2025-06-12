// Get references to key DOM elements by their ID
const overlay = document.getElementById("overlay"); // Fullscreen menu overlay
const navbar = document.getElementById("navbar"); // Top navigation bar
const openBtn = document.getElementById("openBtn"); // ☰ menu button
const closeBtn = document.getElementById("closeBtn"); // × close button

// Function to show the fullscreen overlay menu
function openOverlay() {
  overlay.classList.add("fade-in"); // Add fade-in animation class to the overlay
  navbar.classList.add("transparent"); // Make navbar transparent while overlay is active
  openBtn.style.display = "none"; // Hide the ☰ menu button
  closeBtn.classList.add("visible"); // Show the × close button
}

// Function to hide the fullscreen overlay menu
function closeOverlay() {
  overlay.classList.remove("fade-in"); // Remove the fade-in class to hide the overlay
  navbar.classList.remove("transparent"); // Restore original navbar background
  closeBtn.classList.remove("visible"); // Hide the × close button
  openBtn.style.display = "block"; // Show the ☰ menu button again
}
