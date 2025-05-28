const buttons = document.querySelectorAll('[data-carousel-button]');

let address = 'images/huddyphotos/';
const imageNames = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
    '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
];

const slidesContainer = document.querySelector('[data-slides]');

imageNames.forEach((name, index) => {
    const li = document.createElement('li');
    li.classList.add('slide');
    if (index === 0) li.dataset.active = ''; // Set only the first as active

    const img = document.createElement('img');
    img.src = address + name;
    img.alt = `Image ${index + 1}`; // Optional: You can change this as needed

    li.appendChild(img);
    slidesContainer.appendChild(li);
});




buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // Remove 'data-active' from current slide
        delete activeSlide.dataset.active;
        // Set 'data-active' on new slide
        slides.children[newIndex].dataset.active = '';
        console.log(address + name);
    });
});
