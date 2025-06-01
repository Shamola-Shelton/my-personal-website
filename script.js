document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about");

  aboutSection.addEventListener("mouseover", () => {
    aboutSection.style.backgroundColor = "#e0f7fa";
  });

  aboutSection.addEventListener("mouseout", () => {
    aboutSection.style.backgroundColor = "transparent";
  });
});
