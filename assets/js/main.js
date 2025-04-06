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

// modal y validador para pagina contacto.html

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.querySelector(".submit-btn");
  const confirmationModal = document.getElementById("confirmationModal");
  const closeModal = document.querySelector(".close-modal");
  const modalBtn = document.querySelector(".modal-btn");

  // Validación adicional antes de enviar
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Mostrar spinner
    submitBtn.classList.add("sending");

    // Simular envío (en un caso real sería una petición AJAX)
    setTimeout(function () {
      // Ocultar spinner
      submitBtn.classList.remove("sending");

      // Mostrar modal de confirmación
      confirmationModal.style.display = "flex";

      // Resetear formulario
      contactForm.reset();
    }, 1500);
  });

  // Cerrar modal
  closeModal.addEventListener("click", function () {
    confirmationModal.style.display = "none";
  });

  modalBtn.addEventListener("click", function () {
    confirmationModal.style.display = "none";
  });

  // Cerrar al hacer click fuera del modal
  window.addEventListener("click", function (e) {
    if (e.target === confirmationModal) {
      confirmationModal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("billingSwitch");
  const prices = document.querySelectorAll(".price");

  function updatePrices() {
    prices.forEach((price) => {
      const monthly = price.getAttribute("data-monthly");
      const annually = price.getAttribute("data-annually");
      price.textContent = toggle.checked ? annually : monthly;
    });
  }

  toggle.addEventListener("change", updatePrices);
  updatePrices(); // Al cargar
});

// scripts para la pagina blog.html

// Scroll Reveal para los artículos
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".article-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  articles.forEach((article) => {
    observer.observe(article);
  });

  // Filtrado de artículos
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Quitar active de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Añadir active al botón clickeado
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      const articles = document.querySelectorAll(".article-card");

      articles.forEach((article) => {
        if (
          filter === "all" ||
          article.getAttribute("data-tags").includes(filter)
        ) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
    });
  });
});
