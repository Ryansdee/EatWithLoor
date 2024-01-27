document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }
  
    showSlide(currentSlide);
  
    document.querySelector(".prev-button").addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    document.querySelector(".next-button").addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  });
  