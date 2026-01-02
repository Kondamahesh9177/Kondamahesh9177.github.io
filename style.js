// ===============================
// Smooth Scroll for Navbar Links
// ===============================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ===================================
// Active Navbar Link on Scroll
// ===================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// ===================================
// Auto Update Footer Year
// ===================================
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();

if (footer) {
  footer.innerHTML = `© ${currentYear} Konda Mahesh | Built with ❤️`;
}


// ===================================
// Button Hover Animation (Optional)
// ===================================
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
    button.style.transition = "0.3s ease";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});
