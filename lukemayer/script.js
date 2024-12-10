window.addEventListener("mousemove", function (dets) {
    document.querySelector("#smcircle").style.top = `${dets.clientY}px`;
    document.querySelector("#smcircle").style.left = `${dets.clientX}px`;
})

document.querySelectorAll(".enlarge")
    .forEach(function (elem) {
        elem.addEventListener("mousemove", function () {
            document.querySelector("#smcircle").style.width = "60px";
            document.querySelector("#smcircle").style.height = "60px";
            document.querySelector("#smcircle").style.backgroundColor = "white";
            document.querySelector("#smcircle").style.mixBlendMode = "difference";
           
        })
        elem.addEventListener("mouseleave", function () {
            document.querySelector("#smcircle").style.width = "15px";
            document.querySelector("#smcircle").style.height = "15px";
            document.querySelector("#smcircle").style.backgroundColor = "transpareant";
            document.querySelector("#smcircle").style.mixBlendMode = "initial";
            
        })
    });


    document.querySelectorAll(".abcd").forEach(function (elem) {
        elem.addEventListener("mousemove", function (dets) {
            document.querySelector("#smcircle").style.display = "none";
            document.querySelector("#cursor").style.display = "block"; // Use block or inline-block
            const color = dets.target.dataset.color || "#ffffff"; // Default color if dataset is missing
            document.querySelector("#main").style.backgroundColor = color;
            document.querySelector("#mainheading").style.backgroundColor = "transparent";
        });
    
        elem.addEventListener("mouseleave", function () {
            document.querySelector("#smcircle").style.display = "block"; // Revert to visible
            document.querySelector("#cursor").style.display = "none"; // Hide the custom cursor
            document.querySelector("main").style.backgroundColor = "#ffffff"; // Default background color
            document.querySelector("#mainheading").style.backgroundColor = "white";
        });
    });
    
document.querySelector("#circle").addEventListener("mousemove", function (dets) {
    document.querySelector("#circle").style.transfrom = `translate(${dets.clientX * .2}px,${dets.clientY * .1}px`;
})
document.querySelector("#circle").addEventListener("mouseleave", function (dets) {
    document.querySelector("#circle").style.transfrom = `translate(${dets.clientX * .2}px,${dets.clientY * .1}px`;
})

document.querySelectorAll(".img")
    .forEach(function (elem) {
        elem.addEventListener("mousemove", function (dets) {
            document.querySelector("#cursor").style.top = `${dets.clientY}px`;
            document.querySelector("#cursor").style.left = `${dets.clientX}px`;
        })
    })





$('.ttxt h1').textillate({ in: { effect: 'fadeInUp', delay: 80 } });

$('#footer h1').textillate({ in: { effect: 'fadeInUp', delay: 30 } });


document.querySelector(".Ncircle").addEventListener("mousemove", function (dets) {
    $("#circle").css({
        "transform": `translate(${dets.clientX * .1}px,${dets.clientY * .1 - 50}px)`
    })
})
document.querySelector(".Ncircle").addEventListener("mouseout", function (dets) {
    $("#circle").css({
        "transform": `translate(0px,0px)`
    })
})