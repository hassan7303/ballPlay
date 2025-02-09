[contributors-shield]: https://img.shields.io/github/contributors/hassan7303/ballPlay.svg?style=for-the-badge
[contributors-url]: https://github.com/hassan7303/ballPlay/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hassan7303/ballPlay.svg?style=for-the-badge&label=Fork
[forks-url]: https://github.com/hassan7303/ballPlay/network/members
[stars-shield]: https://img.shields.io/github/stars/hassan7303/ballPlay.svg?style=for-the-badge
[stars-url]: https://github.com/hassan7303/ballPlay/stargazers
[license-shield]: https://img.shields.io/github/license/hassan7303/ballPlay.svg?style=for-the-badge
[license-url]: https://github.com/hassan7303/ballPlay/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hassan-ali-askari-280bb530a/
[telegram-shield]: https://img.shields.io/badge/-Telegram-blue.svg?style=for-the-badge&logo=telegram&colorB=555
[telegram-url]: https://t.me/hassan7303
[instagram-shield]: https://img.shields.io/badge/-Instagram-red.svg?style=for-the-badge&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/hasan_ali_askari
[github-shield]: https://img.shields.io/badge/-GitHub-black.svg?style=for-the-badge&logo=github&colorB=555
[github-url]: https://github.com/hassan7303
[email-shield]: https://img.shields.io/badge/-Email-orange.svg?style=for-the-badge&logo=gmail&colorB=555
[email-url]: mailto:hassanali7303@gmail.com
[website-shield]: https://img.shields.io/badge/-Website-blue.svg?style=for-the-badge&logo=laravel&colorB=555
[website-url]: https://hsnali.ir


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Telegram][telegram-shield]][telegram-url]
[![Instagram][instagram-shield]][instagram-url]
[![GitHub][github-shield]][github-url]
[![Email][email-shield]][email-url]
[![Website][website-shield]][website-url]

# انیمیشن توپ‌های متحرک با قابلیت‌های مختلف

این اسکریپت، یک انیمیشن توپ‌های متحرک روی **Canvas** ایجاد می‌کند که قابلیت‌های مختلفی مثل تغییر رنگ، جایگزینی توپ با ایموجی، حذف خودکار توپ‌ها و تولید توپ‌ها در محل حرکت موس را دارد.

## ویژگی‌ها و قابلیت‌ها

۱. **توپ‌های متحرک**: توپ‌ها در جهات مختلف حرکت می‌کنند و هنگام برخورد با لبه‌های صفحه، مسیر خود را تغییر می‌دهند.

۲. **تغییر رنگ توپ‌ها**: امکان فعال‌سازی حالت رنگی برای توپ‌ها به جای رنگ ثابت.

۳. **استفاده از ایموجی به جای توپ**: می‌توان به جای توپ‌های معمولی، ایموجی نمایش داد.

۴. **حذف خودکار توپ‌ها**: توپ‌های جدید پس از یک ثانیه حذف شوند.

۵. **ایجاد توپ در محل کلیک کاربر**: با کلیک روی صفحه، یک توپ جدید در همان نقطه ایجاد می‌شود.

۶. **تولید توپ در مسیر حرکت موس**: در هر نقطه‌ای که موس حرکت می‌کند، یک توپ جدید ایجاد شود.

## نحوه استفاده

### 1. تغییر رنگ توپ‌ها به تصادفی
برای فعال‌سازی رنگ‌های تصادفی، مقدار `useRandomColor` را `true` قرار دهید:
```js
let useRandomColor = true;
```
اگر می‌خواهید توپ‌ها همیشه قرمز باشند، مقدار را `false` قرار دهید.

### 2. نمایش ایموجی به‌جای توپ
برای فعال‌سازی نمایش ایموجی به‌جای توپ، مقدار `useEmoji` را `true` قرار دهید:
```js
let useEmoji = true;
```

### 3. تغییر لیست ایموجی‌ها
اگر می‌خواهید از ایموجی‌های دلخواه خود استفاده کنید، این آرایه را تغییر دهید:
```js
const emojis = ["🎈", "💖", "🔥", "🌟", "🍀", "⚽", "🎃"];
```

### 4. تغییر سرعت حرکت توپ‌ها
سرعت توپ‌ها به‌طور تصادفی بین `-5` تا `5` مقداردهی می‌شود. اگر بخواهید این محدوده را تغییر دهید، این قسمت را ویرایش کنید:
```js
this.vx = (Math.random() - 0.5) * 10; 
this.vy = (Math.random() - 0.5) * 10;
```
مثلاً برای افزایش سرعت، مقدار `10` را بیشتر کنید.

### 5. تغییر زمان حذف توپ‌ها
اگر می‌خواهید توپ‌ها دیرتر حذف شوند، مقدار `1000` را در این قسمت افزایش دهید:
```js
setTimeout(() => {
  balls = balls.filter(b => b !== this);
}, 1000);
```
مثلاً برای حذف بعد از 2 ثانیه مقدار `2000` قرار دهید.

## رویدادها

### کلیک برای ایجاد توپ جدید
با کلیک روی صفحه، یک توپ جدید در محل کلیک ایجاد می‌شود:
```js
window.addEventListener("click", (e) => {
  balls.push(new Ball(e.clientX, e.clientY));
});
```

### ایجاد توپ در مسیر حرکت موس
در این حالت، هر بار که موس حرکت کند، یک توپ در مسیر آن ایجاد می‌شود:
```js
window.addEventListener("mousemove", (e) => {
  balls.push(new Ball(e.clientX, e.clientY));
});
```

### تغییر اندازه صفحه
هنگامی که اندازه صفحه تغییر کند، بوم (canvas) تنظیم مجدد می‌شود:
```js
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
```


