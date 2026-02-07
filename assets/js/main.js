// ========================================
// REFERENCIAS
// ========================================
const navbar = document.querySelector(".navbar");
const navbarCollapse = document.querySelector(".navbar-collapse");
const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnScrollTop = document.getElementById("btnScrollTop");

// ========================================
// SCROLL - BOTONES FLOTANTES + CIERRE MENU MOBILE
// ========================================
window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Botones flotantes
  if (currentScroll > 300) {
    btnWhatsapp?.classList.add("show");
    btnScrollTop?.classList.add("show");
  } else {
    btnWhatsapp?.classList.remove("show");
    btnScrollTop?.classList.remove("show");
  }

  // Cerrar menú mobile al hacer scroll
  if (navbarCollapse && navbarCollapse.classList.contains("show")) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  }
});

// ========================================
// SCROLL TO TOP
// ========================================
btnScrollTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========================================
// SMOOTH SCROLL LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();

      const target = document.querySelector(href);
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = target.offsetTop - navbarHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Cerrar menú mobile al hacer click
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    }
  });
});

// ========================================
// ANIMACIÓN SERVICIOS
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  document.querySelectorAll(".servicio-item").forEach((item) => {
    observer.observe(item);
  });
});

// ========================================
// AÑO ACTUAL
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
