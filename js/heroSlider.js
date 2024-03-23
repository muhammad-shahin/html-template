const swiper = new Swiper('.swiper', {
  slidesPerView: 2, // Show 2 items per slide
  spaceBetween: 32,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: null,
    type: null,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: null,
  },
});
