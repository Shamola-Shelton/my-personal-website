document.addEventListener("DOMContentLoaded", () => {
  const buttonContainer = document.getElementById("button-container");
  const greetingMessage = document.getElementById("greeting-message");
  const body = document.body;
  const images = document.querySelectorAll('.image-content img');

  // Array of background colors
  const colors = ['#121212', '#222222', '#333333', '#797d7f', '#444444', '#4d5656', '#555555'];
  let currentColorIndex = 0;

  // Create button
  const changeBgBtn = document.createElement("button");
  changeBgBtn.textContent = "Cycle Background Color";

  // Append button to buttonContainer
  buttonContainer.appendChild(changeBgBtn);

  // Add event listener to cycle through colors
  changeBgBtn.addEventListener("click", () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentColorIndex];
    console.log(`Background color changed to ${colors[currentColorIndex]}`);
  });

  // Fade in images
  setTimeout(() => {
    images.forEach(img => img.classList.add('visible'));
  }, 100);

  // Hobbies array and function
  const hobbies = ["Learning to code", "Music", "Football", "Going out with friends"];
  function listHobbies() {
    console.log("My passions include:");
    hobbies.forEach(hobby => console.log(`- ${hobby}`));
  }
  listHobbies();

  // Personal info object and greet function
  const me = {
    name: "Shelton Shamola",
    gender: "Male"
  };
  function greet() {
    if (me.gender === "Male") {
      greetingMessage.textContent = `Hey there, my name is ${me.name}! Keep coding and learning!`;
    } else {
      greetingMessage.textContent = `Hey there, I am ${me.name}! Keep coding and learning!`;
    }
  }
  greet();
});