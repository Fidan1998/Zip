// Decorative sparkle effect: lightweight, no external libraries or tracking.
document.addEventListener("DOMContentLoaded", () => {
  const line = document.querySelector(".blink-line");
  if (line) {
    let visible = true;
    window.setInterval(() => {
      visible = !visible;
      line.style.opacity = visible ? "1" : ".7";
    }, 900);
  }
});
