// Menú hamburguesa
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const containerMenu = document.querySelector(".container-menu");
  const body = document.body;

  menuToggle.addEventListener("click", function () {
    containerMenu.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Cambiar icono entre hamburguesa y X
    const icon = this.querySelector("i");
    if (containerMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Cerrar menú al hacer clic en un enlace (en móviles)
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        containerMenu.classList.remove("active");
        body.classList.remove("menu-open");
        menuToggle.querySelector("i").classList.remove("fa-times");
        menuToggle.querySelector("i").classList.add("fa-bars");
      }
    });
  });
});

// Contador animado
document.addEventListener("DOMContentLoaded", function () {
  const statItems = document.querySelectorAll(".stat-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const circle = entry.target.querySelector(".stat-circle");
          const target = +circle.getAttribute("data-target");
          const number = circle.querySelector(".stat-number");
          const speed = 2000 / target;

          entry.target.classList.add("animated");

          const animate = () => {
            const value = +number.innerText;
            if (value < target) {
              number.innerText = Math.ceil(value + target / 50);
              setTimeout(animate, speed);
            } else {
              number.innerText = target;
            }
          };

          animate();
        }
      });
    },
    { threshold: 0.5 }
  );

  statItems.forEach((item) => {
    observer.observe(item);
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

// modo oscuro

// Selector del botón
const themeToggle = document.querySelector(".theme-toggle");

// Función para cambiar el tema
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Cambiar icono
  const icon = themeToggle.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Escuchar clic en el botón
themeToggle.addEventListener("click", toggleTheme);
