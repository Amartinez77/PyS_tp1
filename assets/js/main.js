document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");
  const speed = 200; // Velocidad de la animación (ms)

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    const updateCount = () => {
      const currentCount = +counter.innerText;
      if (currentCount < target) {
        counter.innerText = Math.ceil(currentCount + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target + "+"; // Añade "+" al final
      }
    };

    // Activa la animación al hacer scroll (Intersection Observer)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);
  });
});
