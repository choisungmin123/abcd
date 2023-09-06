const images = ["도원경.jpg", "너의이름은.jpg", "th.jpg"];

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todayImage}`;

document.body.appendChild(bgImage);
