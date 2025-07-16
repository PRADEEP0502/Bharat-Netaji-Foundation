
const images = [
  'images/netaji1.jpeg',
  'images/netaji2.jpeg',
  'images/netaji3.jpeg',
  'images/netaji4.jpeg',
  'images/netaji5.jpeg',
  'images/netaji6.jpeg',
];

let index = 0;
const heroSection = document.getElementById('home');
function updateBackground() {
  heroSection.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}
setInterval(updateBackground, 15000);
window.onload = updateBackground;
