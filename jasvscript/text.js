function breakTheText() {
    var contentH2 = document.querySelector(".textAnimation");
    var contentH2Text = contentH2.textContent; // Get the text content of the h2

    var clutter = "";

    // Split the text content into characters
    var splittedText = contentH2Text.split(""); // Split into individual characters

    // Iterate through each character and rebuild the content
    splittedText.forEach(function (elem, idx) {
        console.log(idx)
        clutter += `<span>${elem}</span>`; // Wrap each character in a <span>
    });

    contentH2.innerHTML = clutter; // Replace the content with the wrapped spans
}

breakTheText();

gsap.from(".textAnimation span", {
    y: 20, // Animate from 100px below the current position
    duration: 0.5, // Set the animation duration
    stagger: 0.05, // Stagger the animation for each span by 0.05s
    ease: "back.out(1.5)", // Use an easing function for a smooth effect
    opacity:0,
    scrollTrigger: {
        // markers: true, // Show markers for debugging
        trigger: ".projects", // Element that triggers the animation
        start: "top 90%", // Trigger point: when .projects' top reaches 90% of viewport height
        end: "top 80%", // End point: when .projects' top reaches 80% of viewport height
    },
});

