const slider = document.getElementById("hue-slider");
const resetButton = document.getElementById("reset-hue");

slider.addEventListener("input", (e) => {
  const hueShift = e.target.value;
  document.documentElement.style.setProperty("--hue-shift", hueShift);
});

// Reset button functionality
resetButton.addEventListener("click", () => {
  document.documentElement.style.setProperty("--hue-shift", "0");
  slider.value = 0; // Reset slider position
});
