let btn = document.getElementById("button");
let wrt = document.getElementById("wrt");
let rd = document.getElementsByClassName("main");
btn.addEventListener("click", () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
  wrt.innerHTML = randomColor;
  wrt.style.color = "#fff"; // This will change the color code text to white
  document.body.style.color = "#666";
});
