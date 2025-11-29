const themeController = document.querySelector(".theme-controller");
const html = document.documentElement;

let currentTheme = localStorage.theme ? localStorage.theme : "dracula";

if(localStorage.theme){
    html.dataset.theme=localStorage.theme;
}

themeController.addEventListener("click", () => {
  if (html.dataset.theme == "winter") {
    html.dataset.theme = "dracula";
  } else {
    html.dataset.theme = "winter";
  }

  currentTheme = currentTheme == "dracula" ? "winter" : "dracula";
  localStorage.setItem("theme", currentTheme)
});
