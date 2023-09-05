const swiper = new Swiper('.swiper', {
  // Optional parameters
  // loop: true,
  parallax: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.slider-controls__count',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.querySelector('.nav-burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.mobile-nav').classList.toggle('open');
  document.querySelector('.mobile-nav-overlay').classList.toggle('open');
  document.querySelector('.mobile-nav__nav').classList.toggle('active');
  document.querySelector('.mobile-nav__nav-burger').classList.toggle('active');

  const navBtnClose = document.querySelector('.mobile-nav__nav-burger');
  navBtnClose.onclick = ReturnAll;

  function ReturnAll() {return};

});


// const menuBtn = document.querySelector(".nav-burger");
// const menuItems = document.querySelector(".mobile-nav");
// const menuScreen = document.querySelectorAll(".mobile-nav-overlay");
// const menuItem = document.querySelector(".mobile-nav__nav-burger");


// function toggle() {
//   menuBtn.classList.toggle("open");
//   menuItems.classList.toggle("open");
//   menuScreen.classList.toggle("open");
// }


// menuBtn.addEventListener("click", () => {
//   toggle();
// })


// menuItem.forEach(item => {
//   item.addEventListener("click", () => {
//     if (menuBtn.classList.contains("open")) {
//       toggle();
//     }
//   });
// });