document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-links a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });

  window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".nav-bar");
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function () {
      let current = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 60;
          if (window.scrollY >= sectionTop) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === current) {
              link.classList.add("active");
          }
      });
  });
});
