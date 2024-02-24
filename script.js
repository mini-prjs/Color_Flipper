const btn = document.getElementById("btn");
const body = document.getElementsByName("body");
const color = document.getElementById("color");

const change = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", change);
