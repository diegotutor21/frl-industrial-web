// ========================================
// BOTONES FLOTANTES - Mostrar/Ocultar al hacer scroll
// ========================================

const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnScrollTop = document.getElementById("btnScrollTop");

let lastScrollTop = 0;
let scrollThreshold = 300; // Píxeles antes de mostrar los botones

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Mostrar botones solo cuando se hace scroll hacia abajo más de 300px
  if (currentScroll > scrollThreshold) {
    btnWhatsapp.classList.add("show");
    btnScrollTop.classList.add("show");
  } else {
    btnWhatsapp.classList.remove("show");
    btnScrollTop.classList.remove("show");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ========================================
// SCROLL TO TOP - Funcionalidad
// ========================================

btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========================================
// SMOOTH SCROLL para links internos
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Solo aplicar smooth scroll si es un ancla válida
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();

      const target = document.querySelector(href);
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Cerrar menú móvil si está abierto
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    }
  });
});
