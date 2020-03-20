const setings = {
  fill: "#011320",
  background: "#fff"
}
const sliders = document.querySelectorAll(".range-slider")
Array.prototype.forEach.call(sliders, (slider) => {
  slider.querySelector("input").addEventListener("input", (event) => {
    huy(event.target);

  });
  huy(slider.querySelector("input"));

})

function huy(slider) {
  document.getElementById('test').innerHTML = slider.value;
  const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
  const bg = `linear-gradient(90deg, ${setings.fill} ${percentage}%, ${setings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}
