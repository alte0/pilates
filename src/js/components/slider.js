import Swiper from 'swiper'

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.pagination-slider-external',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // Responsive breakpoints
  breakpointsInverse: true,
  breakpoints: {
    // when window width is >= 640px
    764: {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  }
})
// hover slider pause
const swiperStart = () => mySwiper.autoplay.start()
const swiperStop = () => mySwiper.autoplay.stop()
mySwiper.el.addEventListener('mouseenter', swiperStop)
mySwiper.el.addEventListener('mouseleave', swiperStart)
