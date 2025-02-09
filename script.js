let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

const emojis = ["🎈", "💖", "🔥", "🌟", "🍀", "⚽", "🎃"];

class Ball {
  constructor(X, Y) {
    this.base = 20; 
    this.R = this.base;
    this.X = X || random(this.R, window.innerWidth - this.R);
    this.Y = Y || random(this.R, window.innerHeight - this.R);
    this.vx = (Math.random() - 0.5) * 10; // سرعت تصادفی در محور X
    this.vy = (Math.random() - 0.5) * 10; // سرعت تصادفی در محور Y
    this.color = `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.8)`; 
    this.emoji = emojis[random(0, emojis.length - 1)]; 

    // حذف بعد از 1 ثانیه
    setTimeout(() => {
      balls = balls.filter(b => b !== this);
    }, 1000);
  }

  draw() {
    c.beginPath();

    if (useEmoji) {
      c.font = `${this.R * 2}px Arial`;
      c.fillText(this.emoji, this.X - this.R, this.Y + this.R);
    } else {
      c.arc(this.X, this.Y, this.R, 0, 2 * Math.PI);
      c.fillStyle = useRandomColor ? this.color : "red"; // رنگ ثابت یا تصادفی
      c.fill();
    }
  }

  update() {
    if (this.X + this.R >= window.innerWidth || this.X - this.R <= 0) {
      this.vx = -this.vx;
    }
    if (this.Y + this.R >= window.innerHeight || this.Y - this.R <= 0) {
      this.vy = -this.vy;
    }

    this.X += this.vx;
    this.Y += this.vy;
    this.draw();
  }
}

let balls = [];
let useRandomColor = true; // تغییر به false اگر رنگ قرمز ثابت میخوای
let useEmoji = false; // تغییر به true اگر میخوای توپ‌ها ایموجی باشن

for (let i = 0; i < 10; i++) {
  balls.push(new Ball());
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach(ball => ball.update());
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("click", (e) => {
  balls.push(new Ball(e.clientX, e.clientY));
});

window.addEventListener("mousemove", (e) => {
  balls.push(new Ball(e.clientX, e.clientY));
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
