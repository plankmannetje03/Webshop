document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".faq-question");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      const answer = toggle.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });



  const toggleButton = document.querySelector('.button_darkmode');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });


    
  }
);

