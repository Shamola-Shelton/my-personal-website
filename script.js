// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // === Variables ===
  const fadeInElements = document.querySelectorAll(".fade-in");

  // === Function to make elements fade in when visible ===
  function fadeInOnScroll() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1,
    });

    fadeInElements.forEach(el => observer.observe(el));
  }

  // === Call the function ===
  fadeInOnScroll();

  // === DOM Manipulation ===
  const contactSection = document.querySelector("#contact");
  const newNote = document.createElement("p");
  newNote.textContent = "Feel free to reach out for collaborations or questions!";
  contactSection.appendChild(newNote);

  // === Arrays ===
  const hobbies = ["Coding", "Music", "Football", "Design", "Hanging out"];

  // === Repetition with for loop ===
  const aboutSection = document.querySelector("#about .text-content");
  const hobbyList = document.createElement("ul");

  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = hobbies[i];
    hobbyList.appendChild(li);
  }

  aboutSection.appendChild(hobbyList);

  // === Objects ===
  const user = {
    name: "Shelton",
    age: 26,
    isDeveloper: true,
    favoriteArtist: "J. Cole",
    favoriteTeam: "Manchester United",
  };

  // === Conditionals + Logical Operators ===
  if (user.isDeveloper && user.age > 18) {
    const devMsg = document.createElement("p");
    devMsg.textContent = `${user.name} is a passionate developer who supports ${user.favoriteTeam}.`;
    aboutSection.appendChild(devMsg);
  }

  // === Function to toggle contact section visibility ===
  function toggleContact() {
    if (contactSection.style.display === "none") {
      contactSection.style.display = "block";
    } else {
      contactSection.style.display = "none";
    }
  }

  // === Add a button to test function ===
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Contact Info";
  toggleBtn.style.marginTop = "1rem";
  toggleBtn.style.padding = "0.5rem 1rem";
  toggleBtn.style.backgroundColor = "#555";
  toggleBtn.style.color = "white";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "8px";
  toggleBtn.style.cursor = "pointer";

  // Attach the toggle function
  toggleBtn.addEventListener("click", toggleContact);
  contactSection.parentNode.insertBefore(toggleBtn, contactSection);

});
