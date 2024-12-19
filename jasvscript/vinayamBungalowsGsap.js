gsap.to(".hero-image",{
    scrollTrigger: {
        trigger:".one",
        start:"center 10%",
        end:"70%",
        scrub:2,
    //    markers:true
    },
    top:"80vh",
    x:"-22vw",
    ease: "power1.inOut",
})

// gsap.to(".hero-image2",{
//     scrollTrigger: {
//         trigger:".two",
//         start:"center 10%",
//         end:"70%",
//         scrub:2,
//        markers:true
//     },
//     opacity:1,
//     top:"90vh",
//     x:"45vw",
//     scale:0.7,
//     ease: "power1.inOut",
// })





gsap.registerPlugin(ScrollTrigger);

// Create a timeline for the animations
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".two", 
    start: "center 10%", 
    end: "70%", 
    scrub: 2, 
    // markers: true,
  },
});

// Add animation for .hero-image2
timeline.to(".hero-image2", {
  opacity: 1, 
  top: "90vh",
  x: "45vw",
  scale: 0.7,
  ease: "power1.inOut", 
}, 0); 

// Add animation for .hero-image to fade out during the same animation
timeline.to(".hero-image", {
  opacity: 0,
  ease: "power1.inOut",
}, 0);

