document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".faq-question");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      const answer = toggle.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });


  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
