// script.js
const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar ul');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Open modal
document.querySelectorAll(".tourBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    document.getElementById(target).style.display = "block";
  });
});

// Close modal
document.querySelectorAll(".close").forEach(span => {
  span.addEventListener("click", () => {
    span.closest(".modal").style.display = "none";
  });
});

// Close if user clicks outside
window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
}

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');   // show/hide menu
  menuToggle.classList.toggle('active'); // animate hamburger to X
});

// Select all navbar links
const navLinks = document.querySelectorAll('.navbar ul li a');

// Listen for scroll
window.addEventListener('scroll', () => {
  let current = "";

  // Loop through sections
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Remove active from all, add to current
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
✅