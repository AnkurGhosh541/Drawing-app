const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const size = document.getElementById("size");
const color = document.getElementById("color");
const clear = document.getElementById("clear");

increase.addEventListener("click", () => {
  if (size.textContent < 50) size.textContent = Number(size.textContent) + 5;
});

decrease.addEventListener("click", () => {
  if (size.textContent > 5) size.textContent -= 5;
});

clear.addEventListener("click", () => {
  canvas.width = canvas.width;
});

let isPressed = false;
let x, y;

canvas.addEventListener("mousedown", e => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = y = undefined;
});

canvas.addEventListener("mousemove", e => {
  if (isPressed) {
    const x1 = e.offsetX;
    const y1 = e.offsetY;

    drawCircle(x1, y1);
    drawLine(x, y, x1, y1);
    x = x1;
    y = y1;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, Number(size.textContent), 0, Math.PI * 2);
  ctx.fillStyle = color.value;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color.value;
  ctx.lineWidth = Number(size.textContent) * 2;
  ctx.stroke();
}
