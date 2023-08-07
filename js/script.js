// Toggle class active untuk call cart
const callCart = document.querySelector('.call-cart');
document.querySelector('#call-cart-button').onclick = (e) => {
  callCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sc = document.querySelector('#call-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

   if (!sc.contains(e.target) && !callCart.contains(e.target)) {
    callCart.classList.remove('active');
  }
});

feather.replace(); // Initialize feather icons

const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slides li');
let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideItems.length;
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik (3000ms)

const homeSlides = document.querySelector('.home .slides');
const homeSlideItems = document.querySelectorAll('.home .slides li');
let currentHomeSlide = 0;

const menuSlides = document.querySelector('.menu .slides');
const menuSlideItems = document.querySelectorAll('.menu .slides li');
let currentMenuSlide = 0;

const productsSlides = document.querySelector('.products .slides');
const productsSlideItems = document.querySelectorAll('.products .slides li');
let currentProductsSlide = 0;

function nextHomeSlide() {
  currentHomeSlide = (currentHomeSlide + 1) % homeSlideItems.length;
  updateHomeSlide();
}

function updateHomeSlide() {
 homeSlides.style.transform = `translateX(-${currentHomeSlide * 100}%)`;
}

function nextMenuSlide() {
  currentMenuSlide = (currentMenuSlide + 1) % menuSlideItems.length;
  updateMenuSlide();
}

function updateMenuSlide() {
  menuSlides.style.transform = `translateX(-${currentMenuSlide * 100}%)`;
}

function nextProductsSlide() {
  currentProductsSlide = (currentProductsSlide + 1) % productsSlideItems.length;
  updateProductsSlide();
}

function updateProductsSlide() {
  productsSlides.style.transform = `translateX(-${currentProductsSlide * 100}%)`;
}

setInterval(nextHomeSlide, 3000); // Ganti slide home setiap 3 detik (3000ms)
setInterval(nextMenuSlide, 2000); // Ganti slide menu setiap 4 detik (4000ms)
setInterval(nextProductsSlide, 3000); // Ganti slide home setiap 3 detik (3000ms)
