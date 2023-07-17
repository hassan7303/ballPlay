// let canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let c = canvas.getContext("2d");
// let R = 50;
// let X = random(0 + R, window.innerWidth - R);
// let Y = random(0 + R, window.innerHeight - R);
// let vx = 10;
// let vy = 10;

// function animate() {
//   c.clearRect(0, 0, window.innerWidth, window.innerHeight);
//   c.beginPath();
//   c.arc(X, Y, R, 0, 2 * Math.PI);
//   c.fillStyle = "red";
//   c.fill();
//   if (X + R > window.innerWidth + 18 || X - R < 0) {
//     vx = -vx;
//   }
//   if (Y + R > window.innerHeight || Y - R < 0) {
//     vy = -vy;
//   }

//   X += vx;
//   Y += vy;
//   requestAnimationFrame(animate);
// }
// animate();
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//////////////////////////////////////////////////////////
window.addEventListener("click", (e) => {
  balls.push(new Ball(e.clientX, e.clientY));
});
window.addEventListener("mousemove", (e) => {
  balls.forEach((ball) => {
    //روش در اوردن فاصله های دو بعدی
    let X = Math.pow(e.clientX - ball.X, 2);
    let Y = Math.pow(e.clientY - ball.Y, 2);
    let distance = Math.sqrt(X + Y);
    if (distance < 100 && ball.R < ball.base * 3) {
      ball.R += 1;
    } else if (ball.R >= ball.base) {
      ball.R -= 1;
    }
  });
});
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

class Ball {
  constructor(X, Y) {
    this.base = 20;
    // this.R = Math.floor(Math.random() * 50);
    this.R = this.base;
    this.X = X || random(0 + this.R, window.innerWidth - this.R);
    this.Y = Y || random(0 + this.R, window.innerHeight - this.R);
    this.vx = Math.random() * 0.5 * 10;
    this.vy = Math.random() * 0.5 * 10;
    this.draw();
  }

  draw() {
    c.beginPath();
    c.arc(this.X, this.Y, this.R, 0, 2 * Math.PI);
    // let c1 = Math.floor(Math.random() * 256);
    // let c2 = Math.floor(Math.random() * 256);
    // let c3 = Math.floor(Math.random() * 256);
    // c.fillStyle = `rgba(${c1},${c2},${c3})`;
    c.fillStyle = "red";
    c.fill();
  }
  update() {
    if (this.X + this.R > window.innerWidth + 18 || this.X - this.R < 0) {
      this.vx = -this.vx;
    }
    if (this.Y + this.R > window.innerHeight || this.Y - this.R < 0) {
      this.vy = -this.vy;
    }

    this.X += this.vx;
    this.Y += this.vy;
    this.draw();
  }
}
let balls = [];
for (let i = 0; i < 20; i++) {
  balls.push(new Ball(this.X, this.Y));
}

function animate() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  balls.map((ball) => ball.update());
  requestAnimationFrame(animate);
}
animate();
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// setInterval(() => {
//   balls.shift();
// }, 100);
