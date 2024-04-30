//gsap.from(".container",{opacity:"0",scrollTrigger:{trigger:".container",scrller:"#main",start:"top 80%"}}) stagger:0.2 is it takes 2 sec delay to display the styles if multiple class/id is written


// gsap.fromTo(".image",{
//     opacity:"0",
// },
// {
//     delay:2,
//     opacity:"1",
//     y:50,
//     repeat:-1,
//     duration:2
// })

// gsap.from(".first-container",{
//     scale:0.5,//from behind the screen to top 
//     opacity:"0",
//     duration:2

// })

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  autoplay:true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: {//to loop the slides in a circular
    enabled: true,
    additionalSlides: 1,
},
});
  