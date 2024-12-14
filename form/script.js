
gsap.set("#banner",{
    top:"170%",
 })

 
gsap.to("#banner",{
    scrollTrigger: {
        trigger:"#one",
        start:"center center",
        end:"100vh",
        scrub:1.5,
        // markers:true
    },
    top:"-50vh",
    rotate:"720deg",
    ease: Power0.easeOut,
    // duration:1
})
gsap.to("#i1",{
    scrollTrigger: {
        trigger:"#two",
        start:"top 10%",
        end:"80%",
        scrub:2,
    },
    rotate:"360deg",
    ease: Power1.easeOut,
     duration:5
})
gsap.to("#i2",{
    scrollTrigger: {
        trigger:"#two",
        start:"top 10%",
        end:"80%",
        scrub:1,
    },
    rotate:"-360deg",
    ease: Power1.easeOut,
    duration:5
})
gsap.to("#i3",{
    scrollTrigger: {
        trigger:"#two",
        start:"#two 10%",
        end:"80%",
        scrub:3,
    },
    rotate:"360deg",
    ease: Power0.easeInOut,
     duration:5
})

gsap.to(".sml-cir",{
    scrollTrigger:{
        // markers:true,
        trigger:"#two",
        start:"top 10%",
        end:"top 80%",
        scrub:2,
        duration:2
    },
    scale:3.5,
    ease:Expo.easeIn
})

// var tl = gsap.timeline({
//     scrollTrigger: {
//         markers:true,
//           trigger:"#three",
//           start:"top 10%",
//           end:" bottom top",
//           scrub:2,
//      },
//      ease: Power1.easeOut,
// }) 
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#three",
        start:"center center",
        end:"80% 0%",
        // markers:true,
        pin:true,
        scrub:2
    },});
tl
.to("#image1",{
        start:"#three 10%",
        end:"50%",
        scrub:2,
        top:"20%",
        rotate:"-720deg",
        opacity:1,
        ease:Circ.easeOut,
        duration:2
})

.to("#image1",{
    left:"-50%",
    ease:Power0.easeInOut,
    stagger:0.2
})
.to(".images",{
    x:"-200%",
    ease:Circ.easeInOut,
    stagger:0.1
})



var t12 = gsap.timeline({
    scrollTrigger:{
        trigger:"#four",
        start:"center center",
        // markers:true,
        pin:true,
        scrub:2
    },});

t12
.to("#imagestripe",{
    opacity:1,
    stagger:.3,
    ease:Power0.easeInOut

},"a")
.to("#imagestripe",{
    opacity:0,
    stagger:.3,
    ease:Power0.easeInOut

},"a")
.to("#four h1 span",{
    y:"-30",
    ease:Expo.easeInOut,
    stagger:.3
},"a")

document.querySelectorAll("#spans a")
.forEach(function(link){
    link.addEventListener("mouseover",function(dets){
        gsap.to(".images2",{
            x:dets.target.dataset.index * -100 + "%",
            ease:"power3",
            duration:1
        })
    })
})


ScrollTrigger.create({
    onUpdate:function(prg){
        gsap.to("#s1",{width: Math.floor(prg.progress * 100)+"%"});
    }
})


// var tl2 = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#four",
//         start:"10% 10%",
//         matrkers:true,
//         end:"100%",
//         stagger:.2,
//         scrub:1,
//         duration:2 
//     }
// })
// tl2
// .to("#s1",{
//     y:"-30%",
// },"a")

// .to("#imagestripe #s1-i",{
//     opacity:1,
// },"a")