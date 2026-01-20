function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* DARK / LIGHT MODE */
const themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  themeBtn.textContent =
    document.body.classList.contains("dark") ? "🌙" : "☀️";
};

/* SCROLL ANIMATION */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

function sendMessage() {
  alert("Message sent successfully!");
  return false;
}
