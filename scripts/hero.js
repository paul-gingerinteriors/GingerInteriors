const hero = document.querySelector('.hero');
const imageAddress = '../images/huddyphotos/';
const images = [
  '1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp',
  '9.webp', '10.webp', '11.webp', '12.webp', '13.webp', '14.webp', '15.webp',
  '16.webp', '17.webp', '18.webp', '19.webp', '20.webp'
];

let currentImageIndex = 0;

function changeHeroBackground() {
  const nextImage = `url(${imageAddress}${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  // Fade out first
  hero.style.setProperty('--bg-opacity', '0');

  setTimeout(() => {
    // Change the background
    hero.style.setProperty('--bg-url', nextImage);
    // Fade in
    hero.style.setProperty('--bg-opacity', '1');
  }, 1000); // Wait for fade-out
}

// Initialize and repeat
changeHeroBackground();
setInterval(changeHeroBackground, 5000);
