
  const ctx = document.querySelector(".qodef-m-canvas canvas").getContext("2d");
  const data = {
    datasets: [
      {
        data: [33.33, 33.33, 33.33], // Values for each slice
        backgroundColor: ["#12A1BE", "#e7dbc4", "#d4c3aa"], 
        hoverBackgroundColor: [ "#003944d6","#003944d6","#003944d6"],// Colors for slices
        borderWidth: 0, // Removes slice borders
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `Individual ${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };
  new Chart(ctx, {
    type: "pie",
    data: data,
    options: options,
  });




    const menuItems = document.querySelectorAll(".menu li");
    const dynamicImage = document.getElementById("dynamic-image");

    menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const imageSrc = item.getAttribute("data-image");
        dynamicImage.style.opacity = 0; 
        setTimeout(() => {
        dynamicImage.setAttribute("src", imageSrc); 
        dynamicImage.style.opacity = 1;
        }, 200);
    });

    item.addEventListener("mouseleave", () => {
      
        dynamicImage.style.opacity = 0;
        setTimeout(() => {
        dynamicImage.setAttribute("src", "./images/timeline-2.jpg");
        dynamicImage.style.opacity = 1;
        }, 200);
    });
    });



