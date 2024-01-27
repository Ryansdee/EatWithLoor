function activerEffet(entrées, observateur) {
    entrées.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("overlay3")) {
          entry.target.classList.add("active-overlay3");
        }
        if (entry.target.classList.contains("overlay4")) {
          entry.target.classList.add("active-overlay4");
        }
        observateur.unobserve(entry.target);
      }
    });
  }
  const overlay3Element = document.querySelector(".overlay3");
  const overlay4Element = document.querySelector(".overlay4");
  const options = {
    threshold: 0.5,
  };
  if (overlay3Element) {
    const observer3 = new IntersectionObserver(activerEffet, options);
    observer3.observe(overlay3Element);
  }
  if (overlay4Element) {
    const observer4 = new IntersectionObserver(activerEffet, options);
    observer4.observe(overlay4Element);
  }