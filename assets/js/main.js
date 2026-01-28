// ========================================
// NAVBAR - Ocultar al bajar, mostrar al subir
// ========================================

const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;
let scrollThreshold = 100; // Píxeles antes de activar el efecto

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Ocultar/mostrar navbar
  if (currentScroll > scrollThreshold) {
    if (currentScroll > lastScrollTop) {
      // Scrolling hacia abajo - ocultar navbar
      navbar.classList.add("navbar-hidden");
    } else {
      // Scrolling hacia arriba - mostrar navbar
      navbar.classList.remove("navbar-hidden");
    }
  } else {
    // En la parte superior - siempre mostrar
    navbar.classList.remove("navbar-hidden");
  }

  // Mostrar/ocultar botones flotantes
  if (currentScroll > 300) {
    btnWhatsapp.classList.add("show");
    btnScrollTop.classList.add("show");
  } else {
    btnWhatsapp.classList.remove("show");
    btnScrollTop.classList.remove("show");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ========================================
// BOTONES FLOTANTES - Referencias
// ========================================

const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnScrollTop = document.getElementById("btnScrollTop");

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

// ========================================
// ANIMACIÓN DE SERVICIOS AL HACER SCROLL
// ========================================

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
  // Configurar el Intersection Observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // Activar cuando el 10% sea visible
  };

  // Crear el observer
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      // Si el elemento es visible, agregar clase 'animate'
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Opcional: dejar de observar después de animar
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos los items de servicio
  const servicioItems = document.querySelectorAll('.servicio-item');
  servicioItems.forEach(item => {
    observer.observe(item);
  });

});