const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

const isDarkMode = localStorage.getItem("darkMode") === "true";

function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "true");
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "false");
}

if (isDarkMode) {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
