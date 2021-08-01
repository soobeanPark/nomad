const image = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const choosenImage = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);