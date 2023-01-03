/* -- Created by Tivotal -- */

const valuetext = document.querySelector("span");
const slider = document.querySelector("input");

slider.oninput = () => {
  let value = slider.value;

  valuetext.textContent = value;

  valuetext.classList.add("show");

  valuetext.style.left = value / 2 + "%";
};

slider.onmouseleave = () => {
  valuetext.classList.remove("show");
};
