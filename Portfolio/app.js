document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Dark/Light";
  toggleButton.classList.add("dark-mode-toggle");
  document.body.appendChild(toggleButton);

  // Check for saved preference
  if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
      } else {
          localStorage.setItem("theme", "light");
      }
  });
});
