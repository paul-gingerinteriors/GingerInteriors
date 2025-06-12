const hero = document.querySelector('.hero');
const imageAddress = '../images/huddyphotos/';
const images = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
  '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
  '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
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
