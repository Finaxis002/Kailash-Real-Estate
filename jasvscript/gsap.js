// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate .project1 moving into view
gsap.to(".project1", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 100%",
    end: "top 50%",
    scrub: true,
  },
  x: "0%", // Corrected: Kept as is since it works
  duration: 5, // Corrected: Duration works as is
  ease: "power1.out",
});

// Animate .project2 moving into view
gsap.to(".project2", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 100%",
    end: "top 50%",
    scrub: true,
  },
  x: "0%", // Corrected: Kept as is since it works
  duration: 5, // Corrected: Duration works as is
  ease: "power1.out",
});

// Select elements
var main = document.querySelector(".main");
var cursor = document.querySelector("#cursor");
var headerImg = document.querySelector("#header-img");
var cursorImg = document.querySelector("#cursor-img");
var navlink = document.querySelector(".nav-link");
var counting = document.querySelector(".counter");
var contentH2 = document.querySelector(".content h2");
var smlcircle = document.querySelector("#smcircle");

// Ensure all selected elements exist
if (!cursor || !headerImg || !smlcircle) {
  console.error("Required elements are missing.");
}

// Show cursor image on hover
if (headerImg) {
  headerImg.addEventListener("mouseenter", function () {
    gsap.to(cursor, { scale: 4, duration: 0.2 });
  });

  headerImg.addEventListener("mouseleave", function () {
    gsap.to(cursor, { scale: 1, duration: 0.2 });
  });
}

// Move small circle with mouse
window.addEventListener("mousemove", function (dets) {
  if (smlcircle) {
    gsap.to(smlcircle, {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.2, // Smooth animation duration
      ease: "back.out(1.7)", // Easing function for smooth effect
    });
  }
});

// Enlarge circle on hover and revert
document.querySelectorAll(".enlarge").forEach(function (elem) {
  elem.addEventListener("mousemove", function () {
    if (smlcircle) {
      smlcircle.style.width = "60px";
      smlcircle.style.height = "60px";
      smlcircle.style.backgroundColor = "white";
      smlcircle.style.mixBlendMode = "difference";
    }
    if (cursor) cursor.style.display = "none";
  });

  elem.addEventListener("mouseleave", function () {
    if (smlcircle) {
      smlcircle.style.width = "15px";
      smlcircle.style.height = "15px";
      smlcircle.style.backgroundColor = "transparent"; // Fixed typo: "transpareant"
      smlcircle.style.mixBlendMode = "initial";
    }
    if (cursor) cursor.style.display = "block";
  });
});

// Animate the stroke of the SVG path on scroll
gsap.to(".animated-path", {
  strokeDashoffset: 0, // Fully reveal the stroke
  duration: 1.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".counting",
    start: "top 80%",
    end: "top 60%",
    scrub: true,
    // markers: true, // Enable if needed for debugging
  },
});

// Counter animation
function animateCounter(counter, targetValue) {
  let currentValue = { value: 0 }; // Starting value
  gsap.to(currentValue, {
    value: targetValue,
    duration: 1, // Animation duration
    ease: "power0.out",
    onUpdate: function () {
      counter.textContent = Math.floor(currentValue.value); // Update the counter text
    },
  });
}

// Loop through all counter elements and create a ScrollTrigger for each
document.querySelectorAll(".counter").forEach((counter) => {
  const targetValue = parseInt(counter.getAttribute("data-target"), 10); 

  if (!isNaN(targetValue)) {
    ScrollTrigger.create({
      trigger: '.counting',
      start: "top 80%",
      end: "top 30%",
      onEnter: function () {
        animateCounter(counter, targetValue); 
      },
      duration: 1.5,
    });
  } else {
    console.error("Invalid data-target value for counter: ", counter);
  }
});




//HERO SECTION ANIMATION ON TEXT
gsap.defaults({ease: "none"});

const tl = gsap.timeline({repeat:Infinity , repeatDelay:1, yoyo:true})
tl.to(".animate_text", {
    duration: 2,
    text: "Setting New Standards",
    ease: "power2.out",
  });


 
//TIMELINE SCRIPT
gsap.registerPlugin(ScrollTrigger);

// Function to check if the screen is mobile
function isMobile() {
  return window.innerWidth <= 768; // Adjust the breakpoint as per your needs
}

// Only run animations if not on mobile
if (!isMobile()) {
  const checkpoints = gsap.utils.toArray(".checkpoint");
  console.log("Checkpoints: ", checkpoints);

  checkpoints.forEach((checkpoint) => {
    if (!checkpoint.firstElementChild) {
      console.error("Missing child in checkpoint: ", checkpoint);
      return;
    }

    gsap.from(checkpoint.firstElementChild, {
      height: 0,
      scrollTrigger: {
        trigger: 'counting',
        start: "top 80%",
        end: "5% 30%",
        pin: true,
        duration: 0,
        // markers: true,
      },
    });
  });

  const checkpointTexts = gsap.utils.toArray(".text");
  console.log("Checkpoint Texts: ", checkpointTexts);

  checkpointTexts.forEach((text) => {
    if (!text.parentElement) {
      console.error("Missing parent element for text: ", text);
      return;
    }

    gsap.from(text, {
      opacity: 0,
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: text.parentElement,
        start: "top+=200 90%",
        end: "bottom+=340 20%",
        toggleActions: "restart none none reverse",
        duration: 0,
      },
    });
  });

  const images = document.querySelectorAll(".images img");
  console.log("Images: ", images);

  images.forEach((img, i) => {
    const adjacentCheckpoint = img.parentElement.nextElementSibling?.children[i];
    if (!adjacentCheckpoint) {
      console.error("Invalid adjacentCheckpoint for image: ", img);
      return;
    }

    gsap.from(img, {
      opacity: 0,
      scrollTrigger: {
        trigger: adjacentCheckpoint,
        start: "top+=200 center",
        end: "bottom+=340 center",
        toggleActions: "restart none none reverse",
        duration: 0,
      },
    });
  });
}
