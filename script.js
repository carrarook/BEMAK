const text = document.querySelectorAll('.text');
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
  text.forEach((el, i) => {
    TweenMax.to(el, 0.5, {
      x: (e.clientX - halfX) * (i + 1) * 0.01,
      y: (e.clientY - halfY) * (i + 1) * 0.01
    });
  });
});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autowidth: true,
        merge: true,
        autoHeight: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        items:1
        
    })
})

